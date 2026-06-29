import { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import History from "./History";

interface Props {
  onGenerate: (topic: string) => void;
  loading: boolean;
}

const TopicForm = ({ onGenerate, loading }: Props) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    onGenerate(topic.trim());
  };

  return (
    <div className="landing-wrapper">
      <Card className="landing-card shadow-sm">
        <Card.Body>
          <h2 className="landing-title">Generate Your AI Quiz</h2>

          <p className="landing-subtitle">
            Enter a topic and get a structured quiz instantly powered by AI
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="e.g. Neural Networks, React Hooks, DBMS"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={loading}
                className="landing-input"
              />
            </Form.Group>

            <Button
              type="submit"
              className="landing-button w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" /> Generating...
                </>
              ) : (
                "Generate Quiz"
              )}
            </Button>
          </Form>

          <History />
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopicForm;
