import { Request, Response, NextFunction } from "express";
import { generateQuizService } from "../services/quiz.service";

export const generateQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { topic } = req.body;

    if (!topic) {
      const error = new Error("Topic is required");
      error.name = "ValidationError";
      throw error;
    }

    const result = await generateQuizService(topic);

    res.status(200).json({
      success: true,
      quiz: result,
    });
  } catch (error) {
    next(error);
  }
};
