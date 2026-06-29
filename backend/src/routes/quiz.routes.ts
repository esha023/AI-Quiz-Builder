import { Router } from "express";
import { generateQuiz } from "../controllers/quiz.controller";

const router = Router();

router.post("/generate", generateQuiz);

export default router;
