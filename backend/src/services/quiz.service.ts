import { randomUUID } from "crypto";
import { generateQuizWithAI } from "./ai.service";
import { Quiz } from "../types/quiz.types";
import { getWikipediaSummary } from "./wiki.service";

export const generateQuizService = async (topic: string): Promise<Quiz> => {
  const context = await getWikipediaSummary(topic);
  const aiResponse = await generateQuizWithAI(topic, context);

  return {
    id: randomUUID(),
    topic,
    createdAt: new Date().toISOString(),
    questions: aiResponse.questions,
  };
};
