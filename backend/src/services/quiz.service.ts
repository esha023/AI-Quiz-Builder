export const generateQuizService = async (topic: string) => {
  return {
    success: true,
    topic,
    message: "Quiz generation pipeline is working",
  };
};
