import { Request, Response } from "express";
import { generateQuizService } from "../services/quiz.service";

export const generateQuiz = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { topic } = req.body;

    const result = await generateQuizService(topic);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to generate quiz",
    });
  }
};
