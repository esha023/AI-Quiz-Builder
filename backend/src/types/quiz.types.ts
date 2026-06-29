import { Question } from "./question.types";

export interface Quiz {
  id: string;
  topic: string;
  questions: Question[];
  createdAt: string;
}
