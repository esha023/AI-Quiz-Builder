import { z } from "zod";

const optionSchema = z.object({
  A: z.string(),
  B: z.string(),
  C: z.string(),
  D: z.string(),
});

const questionSchema = z.object({
  id: z.string(),
  question: z.string(),
  options: optionSchema,
  correctAnswer: z.enum(["A", "B", "C", "D"]),
  explanation: z.string(),
});

export const aiQuizSchema = z.object({
  questions: z.array(questionSchema).length(5),
});
