import { Container, Badge, Button, ProgressBar } from "react-bootstrap";
import QuestionCard from "./QuestionCard";
import type { Quiz, OptionKey } from "../types/quiz.types";

interface QuizCardProps {
  quiz: Quiz;
  answers: Record<string, OptionKey>;
  onSelect: (questionId: string, answer: OptionKey) => void;
  onSubmit: () => void;
}

const QuizCard = ({ quiz, answers, onSelect, onSubmit }: QuizCardProps) => {
  const total = quiz.questions.length;
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / total) * 100);

  return (
    <Container className="quiz-wrapper">
      <div className="quiz-header">
        <h2 className="quiz-title">Test Your Knowledge</h2>

        <div className="quiz-topic">
          Topic: <Badge bg="primary">{quiz.topic}</Badge>
        </div>

        <div className="quiz-progress-text">
          Progress: {answered}/{total}
        </div>

        <ProgressBar now={progress} className="quiz-progress" />
      </div>

      <div className="quiz-scroll">
        {quiz.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            index={index}
            total={total}
            question={question}
            selectedAnswer={answers[question.id]}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="quiz-footer">
        <Button
          className="submit-btn"
          onClick={onSubmit}
          disabled={answered !== total}
        >
          Submit Quiz
        </Button>
      </div>
    </Container>
  );
};

export default QuizCard;
