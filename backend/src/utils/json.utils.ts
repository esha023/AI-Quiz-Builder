export const cleanJsonResponse = (text: string): string => {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};
