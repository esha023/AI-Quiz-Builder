import api from "./axios";

export const getQuizHistory = async () => {
  const response = await api.get("/history");

  return response.data;
};
