import { Container, Card, Button, Badge, ProgressBar } from "react-bootstrap";
import type { Quiz, OptionKey } from "../types/quiz.types";
import { useEffect } from "react";

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

  const correctCount = quiz.questions.filter((q) => {
    return answers[q.id] === q.correctAnswer;
  }).length;

  const wrongCount = total - correctCount;
  const percentage = Math.round((correctCount / total) * 100);

  return (
    <Container className="result-wrapper">
      <Card className="result-card shadow-sm">
        <Card.Body className="text-center">
          <h2 className="result-title">Quiz Completed</h2>

          <div className="score-circle">
            <div className="score-number">{percentage}%</div>
          </div>

          <ProgressBar now={percentage} className="result-progress" />

          <div className="result-stats">
            <div>
              <Badge bg="success">{correctCount} Correct</Badge>
            </div>

            <div>
              <Badge bg="danger">{wrongCount} Wrong</Badge>
            </div>

            <div>
              <Badge bg="secondary">{total} Total</Badge>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="review-card shadow-sm">
        <Card.Body>
          <h4 className="mb-3">Review Answers</h4>

          {quiz.questions.map((q, index) => {
            const isCorrect = answers[q.id] === q.correctAnswer;

            return (
              <div key={q.id} className="review-item">
                <div className="review-q">
                  Q{index + 1}. {q.question}
                </div>

                <div className={isCorrect ? "text-success" : "text-danger"}>
                  Your Answer: {answers[q.id] || "Not answered"}
                </div>

                {!isCorrect && (
                  <div className="text-success">Correct: {q.correctAnswer}</div>
                )}
              </div>
            );
          })}
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <Button className="restart-btn" onClick={onRestart}>
          Generate New Quiz
        </Button>
      </div>
    </Container>
  );
};

export default ScoreCard;
