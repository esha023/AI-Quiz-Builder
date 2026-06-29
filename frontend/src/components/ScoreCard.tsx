import { useEffect } from "react";
import { Container, Card, Button, Badge, ProgressBar } from "react-bootstrap";

import type { Quiz, OptionKey } from "../types/quiz.types";

interface Props {
  quiz: Quiz;
  answers: Record<string, OptionKey>;
  onRestart: () => void;
}

const ScoreCard = ({ quiz, answers, onRestart }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const total = quiz.questions.length;

  const correctCount = quiz.questions.filter(
    (q) => answers[q.id] === q.correctAnswer,
  ).length;

  const wrongCount = total - correctCount;

  const percentage = Math.round((correctCount / total) * 100);

  let performanceMessage = "";

  if (percentage === 100) {
    performanceMessage = "Excellent! Perfect score.";
  } else if (percentage >= 80) {
    performanceMessage =
      "Great work! You have a strong understanding of this topic.";
  } else if (percentage >= 60) {
    performanceMessage =
      "Good effort. Review the explanations below to strengthen your understanding.";
  } else {
    performanceMessage =
      "Keep practicing. Reviewing the explanations below will help improve your understanding.";
  }

  return (
    <Container className="result-wrapper py-5">
      <Card className="result-card shadow-sm border-0 mb-4">
        <Card.Body className="text-center">
          <h2 className="result-title mb-2">Quiz Completed</h2>

          <p className="text-muted mb-4">
            Topic: <strong>{quiz.topic}</strong>
          </p>

          <div className="score-circle">
            <div className="score-number">{percentage}%</div>
          </div>

          <ProgressBar
            now={percentage}
            className="result-progress my-4"
            variant={percentage >= 70 ? "success" : "warning"}
          />

          <p className="text-muted">{performanceMessage}</p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <Badge bg="success" pill className="px-3 py-2">
              {correctCount} Correct
            </Badge>

            <Badge bg="danger" pill className="px-3 py-2">
              {wrongCount} Incorrect
            </Badge>

            <Badge bg="secondary" pill className="px-3 py-2">
              {total} Questions
            </Badge>
          </div>
        </Card.Body>
      </Card>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <h4 className="mb-4">Answer Review & Feedback</h4>

          {quiz.questions.map((q, index) => {
            const selected = answers[q.id];
            const isCorrect = selected === q.correctAnswer;

            return (
              <div key={q.id}>
                <h5 className="mb-3">
                  Q{index + 1}. {q.question}
                </h5>

                <div className="mb-3">
                  <Badge bg={isCorrect ? "success" : "danger"}>
                    {isCorrect ? "Correct" : "Incorrect"}
                  </Badge>
                </div>

                <p className={isCorrect ? "text-success" : "text-danger"}>
                  <strong>Your Answer:</strong>{" "}
                  {selected
                    ? `${selected}. ${q.options[selected]}`
                    : "Not Answered"}
                </p>

                <p className="text-success">
                  <strong>Correct Answer:</strong> {q.correctAnswer}.{" "}
                  {q.options[q.correctAnswer]}
                </p>

                <Card
                  className={`border-0 ${
                    isCorrect ? "bg-success-subtle" : "bg-warning-subtle"
                  }`}
                >
                  <Card.Body>
                    <h6 className="mb-2">
                      {isCorrect ? "Why this is correct" : "Explanation"}
                    </h6>

                    <p className="mb-0 text-muted">
                      {isCorrect
                        ? `Great job! ${q.explanation}`
                        : `Review this concept. ${q.explanation}`}
                    </p>
                  </Card.Body>
                </Card>

                {index !== quiz.questions.length - 1 && <hr className="my-4" />}
              </div>
            );
          })}
        </Card.Body>
      </Card>

      <div className="text-center mt-5">
        <Button
          className="restart-btn px-4 py-2"
          variant="primary"
          onClick={onRestart}
        >
          Generate New Quiz
        </Button>
      </div>
    </Container>
  );
};

export default ScoreCard;
