import { Request, Response } from "express";

export const getNotes = (req: Request, res: Response) => {
  res.status(200).send("These are your Notes.");
};

export const createNote = (req: Request, res: Response) => {
  res.status(201).json({
    message: "Note created successfully",
  });
};

export const updateNote = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Note ${id} updated successfully`,
  });
};

export const deleteNote = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Note ${id} deleted successfully`,
  });
};