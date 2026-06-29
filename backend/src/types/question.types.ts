export type OptionKey = "A" | "B" | "C" | "D";

export interface Question {
  id: string;
  question: string;
  options: Record<OptionKey, string>;
  correctAnswer: OptionKey;
  explanation: string;
}
