import { Request, Response } from "express";
import Post from "../models/Post.model";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({createdAt:-1}); //newest first
     
    res.status(200).json(posts);
  } catch (error) {
    console.log("error is:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {

    const { title, content } = req.body;

    const newPost = new Post ({
      content,
      title
    })

    await newPost.save()

    res.status(201).json({
      message: "Post created successfully",
    });
  } catch (error) {
    console.log("error is:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { title, content } = req.body;
  
    const updatedPost = await Post.findByIdAndUpdate(id,
      {
        title,
        content
      },{
        new: true
      }
    )

    if(!updatePost){
      return res.status(404).json({
        message: "Post not Found"
      })
    }
  
    res.status(200).json({
      message: `Post ${id} updated successfully`,
    });
  } catch (error) {
    console.log("error is:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const deletePost = await Post.findByIdAndDelete(id);

    if(!deletePost){
      return res.status(404).json({
        message: "Post not Found"
      })
    }

    res.status(200).json({
      message: `Post ${id} deleted successfully`,
    });
  } catch (error) {
    
  }
};

export const getPostById = async (req: Request, res: Response) => {
 
  const { id } = req.params;
 
  try {
    const post = await Post.findById(id)
     
    res.status(200).json(post);

    if(!post){
      return res.json({message:"Post not Found"})
    }
  } catch (error) {
    console.log("error is:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
};