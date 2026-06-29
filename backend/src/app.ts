import express from "express";
import cors from "cors";

import quizRoutes from "./routes/quiz.routes";
import { errorMiddleware } from "./middleware/error.middleware";

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
app.use(errorMiddleware);
export default app;
