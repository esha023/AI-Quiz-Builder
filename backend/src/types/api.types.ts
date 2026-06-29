import { Quiz } from "./quiz.types";

export interface GenerateQuizRequest {
  topic: string;
}

export interface GenerateQuizResponse {
  success: boolean;
  quiz: Quiz;
}
