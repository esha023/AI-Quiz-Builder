# AI Quiz Builder

An AI-powered Quiz Generator built using **React, TypeScript, Express, and Google's Gemini API**.

The application generates topic-specific multiple-choice quizzes using Generative AI, enhances factual accuracy using Wikipedia context retrieval, stores generated quizzes locally, and allows users to review previous quizzes.

---

# Features

## Core Features

- Generate quizzes on any topic using Gemini 2.5 Flash
- Five AI-generated multiple-choice questions
- Four options per question
- Automatic evaluation
- Score calculation
- Detailed answer explanations
- Review all answers after submission
- Modern responsive UI using React Bootstrap

---

## Bonus Features Implemented

### Retrieval Augmented Generation (RAG)

Before generating a quiz, the backend retrieves a concise summary from Wikipedia.

Instead of prompting the LLM using only the topic name, the retrieved context is injected into the prompt. This improves factual grounding and reduces hallucinations.

Workflow:

```
User Topic
      ↓
Wikipedia Search
      ↓
Context Extraction
      ↓
Gemini Prompt
      ↓
Quiz Generation
```

---

### Quiz History

Every generated quiz is stored in a local SQLite database.

Users can

- View previously generated quizzes
- Expand previous quizzes
- Review questions
- Review correct answers
- Read explanations

---

### Answer Feedback

After submitting a quiz the application provides

- Overall score
- Percentage
- Correct answers
- Incorrect answers
- AI-generated explanation for every question

This improves the educational value of the generated quizzes.

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- React Bootstrap
- Axios

---

## Backend

- Node.js
- Express.js
- TypeScript
- SQLite
- Gemini API
- Axios

---

# Project Structure

```
ai-quiz-builder

frontend/
    src/
        api/
        components/
        styles/
        types/

backend/
    src/
        controllers/
        services/
        routes/
        prompts/
        middleware/
        db/
        repository/
        utils/
        types/

```

---

# System Architecture

```
                React Frontend
                      │
                      │ HTTP
                      ▼
               Express REST API
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
Wikipedia Retrieval          SQLite Repository
        │                           │
        ▼                           │
 Prompt Context Injection           │
        │                           │
        └─────────────┬─────────────┘
                      ▼
              Gemini 2.5 Flash
                      │
                      ▼
             Generated Quiz JSON
                      │
                      ▼
               Stored in Database
                      │
                      ▼
             Returned to Frontend
```

---

# API Endpoints

## Generate Quiz

```
POST /api/quizzes
```

Request

```json
{
  "topic": "Operating Systems"
}
```

---

## Health Check

```
GET /api/health
```

---

## Quiz History

```
GET /api/history
```

Returns all previously generated quizzes stored in SQLite.

---

# Technical Decisions

## Why React?

React provides reusable components and efficient UI rendering.

The component-based architecture keeps the application modular and easier to maintain.

---

## Why TypeScript?

TypeScript improves code quality through static typing.

Benefits include

- Better IntelliSense
- Compile-time error detection
- Easier refactoring
- Safer API contracts

---

## Why Express?

Express is lightweight and ideal for exposing REST APIs.

It keeps routing and middleware simple while allowing clean project organization.

---

## Why SQLite?

SQLite was selected because

- No external database installation
- Zero configuration
- Lightweight
- Easy local persistence

For a production-scale application this could easily be replaced with PostgreSQL.

---

## Why Axios?

Axios simplifies HTTP communication.

It provides

- Automatic JSON parsing
- Better error handling
- Request configuration
- Promise-based API

---

## Why React Bootstrap?

React Bootstrap offers production-ready UI components while remaining fully compatible with React.

It allows rapid development without sacrificing responsiveness or accessibility.

---

## Why Gemini 2.5 Flash?

Gemini 2.5 Flash was selected because it provides

- Fast inference
- High-quality educational responses
- Structured JSON generation
- Excellent cost-performance ratio

---

## Why Retrieval Augmentation?

LLMs may hallucinate when prompted using only a topic.

Injecting Wikipedia context

- Improves factual grounding
- Produces more accurate questions
- Reduces fabricated information

without requiring model fine-tuning.

---

## Why Layered Architecture?

The backend follows a layered architecture.

```
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

Benefits

- Separation of concerns
- Easier testing
- Better scalability
- Cleaner codebase
- Easier maintenance

---

# Error Handling

A centralized Express error middleware handles

- Invalid requests
- AI quota errors
- Internal server errors
- Validation failures

This keeps controllers clean and ensures consistent API responses.

---

# Future Improvements

Possible production enhancements include

- User authentication
- Difficulty selection
- Quiz categories
- Leaderboards
- PDF export
- Email reports
- Timed quizzes
- Docker deployment
- Redis caching
- PostgreSQL
- Unit and integration testing
- CI/CD pipelines

---

# Setup

## Backend

```
cd backend

npm install

npm run dev
```

---

## Frontend

```
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Backend

```
PORT=5000

GEMINI_API_KEY=YOUR_API_KEY
```

---

# AI Tools Used

## Google Gemini 2.5 Flash

Used for

- Question generation
- Option generation
- Correct answer generation
- Explanation generation

Reason for selection

- Excellent structured JSON generation
- Fast inference
- Reliable educational content
- Easy integration using Google's official SDK

---

# Author

Esha Chavan

Built as part of an AI Engineering take-home assessment demonstrating full-stack development, REST API design, retrieval-augmented generation (RAG), persistence, and production-oriented software architecture.
