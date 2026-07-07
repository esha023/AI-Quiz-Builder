import type { QuizResponse } from "../types/quiz.types";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const generateQuiz = async (topic: string): Promise<QuizResponse> => {
  const response = await fetch(`${BASE_URL}/quizzes/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate quiz.");
  }

  return response.json();
};