import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById
} from "../controllers/Posts.controller";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;