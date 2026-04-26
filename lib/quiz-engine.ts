import type {
  ChoiceOption,
  ChoiceOptionId,
  Question,
  TrueFalseItemId
} from "@/lib/quiz-types";

export type QuizMode = "lesson" | "all" | "wrong";

export type RuntimeQuestion =
  | (Extract<Question, { type: "choice" }> & {
      shuffledOptions: ChoiceOption[];
    })
  | Extract<Question, { type: "true-false" }>;

export type ChoiceAnswer = {
  questionId: string;
  type: "choice";
  selectedOptionId: ChoiceOptionId;
  correct: boolean;
};

export type TrueFalseAnswer = {
  questionId: string;
  type: "true-false";
  selections: Record<TrueFalseItemId, boolean>;
  correct: boolean;
};

export type AnswerRecord = ChoiceAnswer | TrueFalseAnswer;

export function shuffleArray<T>(items: readonly T[]): T[] {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }

  return next;
}

export function createRuntimeQuestions(questions: readonly Question[]): RuntimeQuestion[] {
  return shuffleArray(questions).map((question) => {
    if (question.type === "choice") {
      return {
        ...question,
        shuffledOptions: shuffleArray(question.options)
      };
    }

    return question;
  });
}

export function isChoiceCorrect(
  question: Extract<Question, { type: "choice" }>,
  selectedOptionId: ChoiceOptionId
) {
  return question.correctOptionId === selectedOptionId;
}

export function isTrueFalseCorrect(
  question: Extract<Question, { type: "true-false" }>,
  selections: Record<TrueFalseItemId, boolean>
) {
  return question.items.every((item) => selections[item.id] === item.correct);
}

export function getWrongQuestions(
  questions: readonly RuntimeQuestion[],
  answers: readonly AnswerRecord[]
) {
  const answerByQuestion = new Map(answers.map((answer) => [answer.questionId, answer]));

  return questions.filter((question) => {
    const answer = answerByQuestion.get(question.id);
    return !answer || !answer.correct;
  });
}

export function answerLabel(value: boolean) {
  return value ? "Đúng" : "Sai";
}
