import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../lib/quiz-data.ts", import.meta.url), "utf8");
const questionsMatch = source.match(/export const questions = (\[[\s\S]*?\]) satisfies Question\[\];/);
const lessonsMatch = source.match(/export const lessons = (\[[\s\S]*?\]) satisfies Lesson\[\];/);

if (!questionsMatch || !lessonsMatch) {
  throw new Error("Cannot find generated quiz data exports.");
}

const questions = Function(`return ${questionsMatch[1]}`)();
const lessons = Function(`return ${lessonsMatch[1]}`)();
const expectedCounts = new Map([
  ["23", 30],
  ["24", 26],
  ["25", 23],
  ["26", 27],
  ["27", 30]
]);

for (const lesson of lessons) {
  const actual = questions.filter((question) => question.lessonId === lesson.id).length;
  const expected = expectedCounts.get(lesson.id);

  if (actual !== expected) {
    throw new Error(`Lesson ${lesson.id} expected ${expected} questions but found ${actual}.`);
  }
}

const bracketTagPattern = /\[(NB|TH|VD|TF)\]?/;

function inspectParts(parts, location) {
  for (const part of parts) {
    if (part.type === "text" && bracketTagPattern.test(part.text)) {
      throw new Error(`Difficulty tag remains at ${location}: ${part.text}`);
    }

    if (part.type === "text" && part.text.includes("{img:")) {
      throw new Error(`Raw image marker remains at ${location}: ${part.text}`);
    }
  }
}

for (const question of questions) {
  inspectParts(question.prompt, question.id);

  if (question.type === "choice") {
    if (question.options.length !== 4) {
      throw new Error(`${question.id} does not have 4 options.`);
    }

    if (!question.options.some((option) => option.id === question.correctOptionId)) {
      throw new Error(`${question.id} has invalid correct option ${question.correctOptionId}.`);
    }

    question.options.forEach((option) => inspectParts(option.content, `${question.id}.${option.id}`));
  } else {
    if (question.items.length !== 4) {
      throw new Error(`${question.id} does not have 4 true/false items.`);
    }

    question.items.forEach((item) => inspectParts(item.content, `${question.id}.${item.id}`));
  }
}

console.log(`Validated ${questions.length} questions across ${lessons.length} lessons.`);
