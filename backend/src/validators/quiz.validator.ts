import { z } from "zod";

export const generateQuizSchema = z.object({
  topic: z
    .string()
    .trim()
    .min(3, "Topic must be at least 3 characters long.")
    .max(100, "Topic must not exceed 100 characters."),
});
