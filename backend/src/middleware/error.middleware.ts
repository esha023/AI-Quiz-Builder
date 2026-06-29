import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error("Error caught by middleware:");
  console.error(err);

  let statusCode = 500;
  let message = "Internal Server Error";

  if (
    err?.status === 429 ||
    err?.code === 429 ||
    err?.message?.toLowerCase?.().includes("quota")
  ) {
    statusCode = 429;
    message = "AI quota exceeded. Please try again later.";
  }

  if (err?.name === "ValidationError") {
    statusCode = 400;
    message = err.message || "Invalid request data";
  }

  return res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
    },
  });
};
