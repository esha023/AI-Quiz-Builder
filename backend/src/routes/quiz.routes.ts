import { Router } from "express";
import { generateQuiz, getQuizHistory } from "../controllers/quiz.controller";

const router = Router();

router.post("/generate", generateQuiz);

router.get("/history", getQuizHistory);

export default router;
