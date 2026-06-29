import { quizHistory } from "../db/history.db";
import { QuizHistory } from "../types/history.types";

export const saveQuizHistory = (quiz: QuizHistory) => {
  quizHistory.unshift(quiz);
};

export const getQuizHistory = () => {
  return quizHistory;
};
