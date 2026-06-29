export type OptionKey = "A" | "B" | "C" | "D";

export interface Question {
  id: string;
  question: string;
  options: Record<OptionKey, string>;
  correctAnswer: OptionKey;
  explanation: string;
}

export interface Quiz {
  id: string;
  topic: string;
  createdAt: string;
  questions: Question[];
}

export interface QuizResponse {
  success: boolean;
  quiz: Quiz;
}
