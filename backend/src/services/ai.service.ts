import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

import { buildQuizPrompt } from "../prompts/quiz.prompt";
import { cleanJsonResponse } from "../utils/json.utils";
import { aiQuizSchema } from "../validators/ai-response.validator";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateQuizWithAI = async (topic: string, context?: string) => {
  try {
    const prompt = buildQuizPrompt(topic, context);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;

    if (!text) {
      throw new Error("Empty response from Gemini.");
    }

    const cleaned = cleanJsonResponse(text);

    const parsed = JSON.parse(cleaned);

    return aiQuizSchema.parse(parsed);
  } catch (error) {
    console.error("AI Service Error:", error);
    throw new Error("Failed to generate quiz using AI.");
  }
};
