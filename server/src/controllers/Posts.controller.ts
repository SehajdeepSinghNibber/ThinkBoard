import { Request, Response } from "express";
import Post from "../models/Post.model";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find()
     
    res.status(200).json(posts);
  } catch (error) {
    console.log("error is:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const createPost = async (req: Request, res: Response) => {
  res.status(201).json({
    message: "Post created successfully",
  });
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Post ${id} updated successfully`,
  });
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Post ${id} deleted successfully`,
  });
};