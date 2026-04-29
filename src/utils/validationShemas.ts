import { z } from "zod";

// Create Article Schema
export const createArticleSchema = z.object({
  title: z.string().min(2, "Title is required").max(200),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

// Register Schema
export const registerSchema = z.object({
  username: z.string().min(2).max(100),
  email: z.email().min(3).max(200),
  password: z.string().min(6),
});

// Login Schema
export const loginSchema = z.object({
  email: z.email().min(3).max(200),
  password: z.string().min(6),
});
// Create Comment Schema
export const createCommentSchema = z.object({
  text: z.string().min(2).max(200),
  articleId: z.number(),
});

// Create Comment Schema
export const updateUserSchema = z.object({
  username: z.string().min(2).max(100).optional(),
  email: z.email().min(3).max(100).optional(),
  password: z.string().min(6).optional(),
});
