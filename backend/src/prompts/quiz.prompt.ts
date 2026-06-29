export const buildQuizPrompt = (topic: string, context?: string): string => `
You are an expert educator.

Generate exactly 5 multiple-choice questions about "${topic}".

${context ? `Use the following context as the primary factual reference:\n${context}` : ""}

Rules:
- Return ONLY valid JSON.
- Do NOT wrap the response in markdown.
- Do NOT include \`\`\`json.
- Do NOT include explanations outside JSON.
- Generate exactly 5 questions.
- Each question must have 4 options labeled A, B, C, and D.
- Only one option should be correct.
- Include a short explanation for the correct answer.

Return JSON in this exact format:

{
  "questions": [
    {
      "id": "1",
      "question": "Question text",
      "options": {
        "A": "Option A",
        "B": "Option B",
        "C": "Option C",
        "D": "Option D"
      },
      "correctAnswer": "A",
      "explanation": "Short explanation."
    }
  ]
}
`;
