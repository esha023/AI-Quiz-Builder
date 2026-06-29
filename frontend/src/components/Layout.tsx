import { Container } from "react-bootstrap";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="app-header">
        <Container className="d-flex justify-content-between align-items-center">
          <h3 className="logo">AI Quiz Builder</h3>

          <span className="header-tag">AI Powered Assessment</span>
        </Container>
      </header>

      <main className="app-main">
        <Container>{children}</Container>
      </main>

      <footer className="app-footer">
        <Container>
          <small>
            AI Quiz Builder • Built with React, Express and Gemini API
          </small>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
