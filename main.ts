import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my plants a joke about photosynthesis. They grew to appreciate the light humor.";

if (JOKE.trim().length === 0) {
  throw new Error("entry text must not be empty");
}
if ([...JOKE].length < 1 || [...JOKE].length > 140) {
  throw new Error("entry text must be 1 to 140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("written entry does not match the joke byte for byte");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry must stay on one line");
}
