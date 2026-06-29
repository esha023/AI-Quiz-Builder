import express from "express";
import cors from "cors";

import quizRoutes from "./routes/quiz.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "AI Quiz Builder API is running",
  });
});

app.use("/api/quizzes", quizRoutes);

export default app;
