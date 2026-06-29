export const buildQuizPrompt = (topic: string, context?: string): string => `
You are an expert educator and assessment creator.

Your task is to generate a high-quality multiple-choice quiz about the following topic.

Topic:
${topic}

${
  context
    ? `
Retrieved Reference Material (Wikipedia):
${context}

Instructions:
- Use the retrieved reference material as the primary source of factual information.
- If the reference material is incomplete, you may use widely accepted general knowledge related to the topic.
- Do not invent or hallucinate facts.
`
    : `
No external reference material was provided.
Use accurate and widely accepted knowledge about the topic.
`
}

Requirements:
- Generate exactly 5 multiple-choice questions.
- Each question must have exactly 4 options labeled A, B, C, and D.
- Only one option should be correct.
- Include a short explanation (1–2 sentences) explaining why the correct answer is correct.
- Questions should test conceptual understanding rather than simple memorization.
- Ensure all questions are factually accurate.

Output Rules:
- Return ONLY valid JSON.
- Do NOT wrap the response in markdown.
- Do NOT include \`\`\`.
- Do NOT include any text before or after the JSON.

Return JSON in the following format:

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
      "explanation": "Brief explanation."
    }
  ]
}
`;
