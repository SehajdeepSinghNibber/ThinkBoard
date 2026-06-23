import { Request, Response } from "express";

export const getPosts = (req: Request, res: Response) => {
  res.status(200).send("These are your Posts.");
};

export const createPost = (req: Request, res: Response) => {
  res.status(201).json({
    message: "Post created successfully",
  });
};

export const updatePost = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Post ${id} updated successfully`,
  });
};

export const deletePost = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Post ${id} deleted successfully`,
  });
};