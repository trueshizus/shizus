import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const { text } = await generateText({
  model: google("ggemini-2.0-flash-lite-preview-02-05"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});

console.log(text);
