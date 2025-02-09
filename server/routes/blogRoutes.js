import express from "express";
import verifyAuth from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { addPost, allPosts, deletePost, editPost, singlePost, userPost } from "../controller/Blog.js";

const router = express.Router();

router.post("/create-post", verifyAuth, upload.single("image"), addPost);
router.get("/all-post", allPosts);
router.get("/user-post", verifyAuth, userPost);
router.get("/single-post/:id", singlePost);
router.put("/edit-post/:id", verifyAuth, upload.single("image"), editPost);
router.delete("/delete-post/:id", verifyAuth, deletePost);

export default router;