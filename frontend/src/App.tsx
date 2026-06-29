import { useState } from "react";

import { generateQuiz } from "./api/quiz.api";

import TopicForm from "./components/TopicForm";
import Loader from "./components/Loader";
import QuizCard from "./components/QuizCard";
import ScoreCard from "./components/ScoreCard";
import Layout from "./components/Layout";
import type { Quiz, OptionKey } from "./types/quiz.types";

import "./styles/app.css";

function App() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [answers, setAnswers] = useState<Record<string, OptionKey>>({});

  const handleGenerate = async (topic: string) => {
    try {
      setLoading(true);

      const data = await generateQuiz(topic);

      setQuiz(data.quiz);

      setAnswers({});

      setSubmitted(false);
    } catch (error) {
      console.error(error);
      alert("Failed to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionId: string, answer: OptionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    if (!quiz) return;

    if (Object.keys(answers).length !== quiz.questions.length) {
      alert("Please answer all questions.");
      return;
    }

    setSubmitted(true);
  };

  const handleRestart = () => {
    setQuiz(null);
    setAnswers({});
    setSubmitted(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      {!quiz && <TopicForm onGenerate={handleGenerate} loading={loading} />}

      {quiz && !submitted && (
        <QuizCard
          quiz={quiz}
          answers={answers}
          onSelect={handleAnswerSelect}
          onSubmit={handleSubmit}
        />
      )}

      {quiz && submitted && (
        <ScoreCard quiz={quiz} answers={answers} onRestart={handleRestart} />
      )}
    </Layout>
  );
}

export default App;
