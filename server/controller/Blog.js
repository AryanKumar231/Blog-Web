import { log } from "console";
import Blog from "../model/Blog.js";
import fs from "fs";

const addPost = async (req, res) => {
    try {
        const { title, content, category, isPublish } = req.body;

        const image = req.file ? req.file.filename : null;
        const user = req.user;

        if (!title || !content || !category) return res.json({ "message": "Please provide all field!! " })

        const arr = category.split(",");
        let publish = isPublish === 'true';
        const post = new Blog({
            title, content, category: arr, heroImg: image, user, isPublish: publish
        })

        await post.save();
        return res.json({ "message": "Success" })

    } catch (error) {
        console.error(error);
    }
}

const allPosts = async (req, res) => {
    try {
        const blog = await Blog.find({ isPublish: true }).populate("user", "-password");
        res.json({ "message": "Success", blog })
    }
    catch (error) {
        console.log(error);
    }
}

const userPost = async (req, res) => {
    try {
        const blog = await Blog.find({ user: req.user }).populate("user", '-password');
        return res.json({ "message": "Success", blog })
    } catch (error) {
        console.log(error);
    }
}

const singlePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Blog.findById(id).populate("user", "-password");

        if (post == null) return res.json({ "message": "Post not Found!!" })

        return res.json({ "message": "Success", post })

    } catch (error) {
        console.log(error);
    }
}

const editPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, category, isPublish } = req.body;

        const blog = await Blog.findOne({ _id: id, user: req.user });

        if (!blog) return res.json({ "message": "Post not found!!" });

        if (req.file && blog.heroImg) {
            const oldPath = `./uploads/${blog.heroImg}`;
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
            blog.heroImg = req.file.filename;
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.isPublish = isPublish === "true" || blog.isPublish;
        blog.category = category ? category.split(",") : blog.category;

        await blog.save();
        return res.json({ "message": "Update Successfully!!" })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Server error" });
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        let blog = await Blog.findOne({
            $and: [
                { _id: id },
                { user: req.user }
            ]
        });

        if (!blog) {
            return res.status(404).json({ success: false, message: "Post not found!" });
        }

        if (blog.heroImg) {
            const oldPath = `./uploads/${blog.heroImg}`;

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        await Blog.deleteOne({
            $and: [
                { _id: id },
                { user: req.user }
            ]
        });

        res.status(200).json({ success: true, message: "Post deleted successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export {
    addPost, allPosts, singlePost, deletePost, editPost, userPost
}