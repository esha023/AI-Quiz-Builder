import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import type { Question, OptionKey } from "../types/quiz.types";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: OptionKey;
  onSelect: (questionId: string, answer: OptionKey) => void;

  index: number;
  total: number;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelect,
  index,
  total,
}: QuestionCardProps) => {
  const options = Object.entries(question.options) as [OptionKey, string][];

  return (
    <Card className="question-card">
      <Card.Header className="question-header">
        Question {index + 1} of {total}
      </Card.Header>

      <Card.Body>
        <Card.Title className="mb-4 fs-5">{question.question}</Card.Title>

        {options.map(([key, value]) => (
          <Form.Check
            key={key}
            id={`${question.id}-${key}`}
            className="quiz-option mb-3"
            type="radio"
            name={question.id}
            label={`${key}. ${value}`}
            checked={selectedAnswer === key}
            onChange={() => onSelect(question.id, key)}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
