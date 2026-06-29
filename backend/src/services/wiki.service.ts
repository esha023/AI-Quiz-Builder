import axios from "axios";

export const getWikipediaSummary = async (topic: string) => {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`;

    const response = await axios.get(url);

    return response.data.extract ?? "";
  } catch {
    return "";
  }
};
