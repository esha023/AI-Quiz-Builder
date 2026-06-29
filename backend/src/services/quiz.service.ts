import { randomUUID } from "crypto";
import { generateQuizWithAI } from "./ai.service";
import { Quiz } from "../types/quiz.types";
import { getWikipediaSummary } from "./wiki.service";
import {
  saveQuizHistory,
  getQuizHistory,
} from "../repositories/history.repository";

export const generateQuizService = async (topic: string): Promise<Quiz> => {
  const context = await getWikipediaSummary(topic);
  const aiResponse = await generateQuizWithAI(topic, context);

  const quiz = {
    id: randomUUID(),
    topic,
    createdAt: new Date().toISOString(),
    questions: aiResponse.questions,
  };

  saveQuizHistory(quiz);

  return quiz;
};

export const getQuizHistoryService = () => {
  return getQuizHistory();
};
