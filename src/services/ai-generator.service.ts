"use server";

import { buildPrompt } from "@/components/shared/PromptBuilder";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
});

export type ContentType =
  | "DESCRIPTION"
  | "BLOG"
  | "SUMMARY"
  | "CAPTION";

export async function generateAIContent({
  type,
  input,
}: {
  type: ContentType;
  input: any;
}) {
  const prompt = buildPrompt(type, input);

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are EstateFlow AI content generator for real estate platform.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return res.choices[0].message.content;
}