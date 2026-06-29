import { randomUUID } from "crypto";
import { generateQuizWithAI } from "./ai.service";
import { Quiz } from "../types/quiz.types";

export const generateQuizService = async (topic: string): Promise<Quiz> => {
  const aiResponse = await generateQuizWithAI(topic);

  return {
    id: randomUUID(),
    topic,
    createdAt: new Date().toISOString(),
    questions: aiResponse.questions,
  };
};
