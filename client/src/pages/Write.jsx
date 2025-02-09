import React, { useEffect, useRef, useState } from 'react';
import Editor from '../components/Editor';
import { toast } from 'react-toastify';
import { useEditBlogMutation, useGetSingleBlogQuery, useWriteBlogMutation } from '../services/blog';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Write = () => {
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const contentRef = useRef(null);
    const isPublishRef = useRef(null);
    const imageRef = useRef(null);
    const [imageName, setImageName] = useState("Upload hero image")
    const navigate = useNavigate();

    const [writeBlog, { isLoading }] = useWriteBlogMutation();

    const { state } = useLocation();
    const blogId = state?.id;
    console.log("write: ", blogId);

    const { data } = useGetSingleBlogQuery(blogId);
    const [editBlog] = useEditBlogMutation();

    useEffect(() => {
        if (blogId && data) {
            console.log(data);

            titleRef.current.value = data?.post?.title;
            categoryRef.current.value = data?.post?.category;
            contentRef.current.getEditor().clipboard.dangerouslyPasteHTML(data?.post?.content);
        }
    }, [blogId, data]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", titleRef.current?.value);
        formData.append("category", categoryRef.current?.value);
        formData.append("isPublish", isPublishRef.current?.value);
        formData.append("image", imageRef.current?.files[0]);
        formData.append("content", contentRef.current?.value);

        try {
            const res = (blogId !== undefined) ? await editBlog({ formData, id: blogId }) : await writeBlog(formData);
            toast.success(res.message);
            navigate("/profile")
            titleRef.current.value = '';
            categoryRef.current.value = '';
            contentRef.current.value = '';
            isPublishRef.current.value = '';
            setImageName("Upload hero image");

        } catch (err) {
            toast.error("Error Occurred");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>

                <div className='flex justify-between items-center mt-12'>
                    <h1 className='text-3xl font-semibold'>Write your Blog...</h1>
                    <select className='border py-1 px-3 rounded ' ref={isPublishRef}>
                        <option value="false">Draft</option>
                        <option value="true">Publish</option>
                    </select>
                </div>
                <input
                    type="text"
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 focus:outline-gray-500 dark:text-gray-100 text-gray-800 w-full my-8'
                    placeholder='Enter your blog title...'
                    name="title"
                    ref={titleRef}
                />
                <label
                    htmlFor="hero-image"
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 focus:outline-gray-500 dark:text-gray-100 text-gray-800 inline-block w-full mb-8'
                >
                    {imageName}
                </label>
                <input type="file" id="hero-image" className='hidden'
                    ref={imageRef} onChange={(e) => setImageName(e.target.files[0].name)}
                />
                <input
                    type="text"
                    placeholder='Enter category (comma separated)...'
                    className='border border-gray-200 dark:border-gray-800 rounded-md p-2 focus:outline-gray-500 dark:text-gray-100 text-gray-800 w-full mb-8'
                    name='category'
                    ref={categoryRef}
                />
                <Editor reference={contentRef} />
                <input type='submit' className='inline-block my-8 bg-blue-500 text-white w-full py-2 rounded-lg cursor-pointer text-center' value={isLoading ? <Loader isLoading={isLoading} /> : "Submit"} />
            </form>
        </div>
    );
}

export default Write;