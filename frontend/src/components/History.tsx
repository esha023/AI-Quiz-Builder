import { useEffect, useState } from "react";
import { Card, Accordion, Badge } from "react-bootstrap";

import { getQuizHistory } from "../api/history.api";
import type { Quiz } from "../types/quiz.types";

const History = () => {
  const [history, setHistory] = useState<Quiz[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await getQuizHistory();
      setHistory(data.history ?? []);
    } catch (error) {
      console.error(error);
      setHistory([]);
    }
  };

  return (
    <Card className="history-card shadow-sm border-0">
      <Card.Body>
        <h4 className="mb-4">Quiz History</h4>

        {history.length === 0 ? (
          <p className="text-muted mb-0">No quizzes have been generated yet.</p>
        ) : (
          <Accordion alwaysOpen>
            {history.map((quiz, quizIndex) => (
              <Accordion.Item eventKey={quizIndex.toString()} key={quiz.id}>
                <Accordion.Header>
                  <div className="w-100 d-flex justify-content-between align-items-center pe-3">
                    <strong>{quiz.topic}</strong>

                    <Badge bg="secondary">
                      {new Date(quiz.createdAt).toLocaleDateString()}
                    </Badge>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  {quiz.questions.map((question, index) => (
                    <Card
                      key={question.id}
                      className="mb-3 bg-light border-0 shadow-sm"
                    >
                      <Card.Body>
                        <h6>
                          Q{index + 1}. {question.question}
                        </h6>

                        <div className="mt-3">
                          <strong>Options</strong>

                          <ul className="mt-2 mb-3">
                            {Object.entries(question.options).map(
                              ([key, value]) => (
                                <li key={key}>
                                  <strong>{key}.</strong> {value}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <p className="mb-1">
                          <strong>Correct Answer:</strong>{" "}
                          {question.correctAnswer}
                        </p>

                        <p className="text-muted mb-0">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </Card.Body>
                    </Card>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Card.Body>
    </Card>
  );
};

export default History;
