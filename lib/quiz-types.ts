export type LessonId = "23" | "24" | "25" | "26" | "27";

export type ContentPart =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

export type Lesson = {
  id: LessonId;
  title: string;
  questionCount: number;
};

export type ChoiceOptionId = "A" | "B" | "C" | "D";

export type ChoiceOption = {
  id: ChoiceOptionId;
  content: ContentPart[];
};

export type ChoiceQuestion = {
  id: string;
  lessonId: LessonId;
  number: number;
  type: "choice";
  prompt: ContentPart[];
  options: ChoiceOption[];
  correctOptionId: ChoiceOptionId;
  explanation: string;
};

export type TrueFalseItemId = "a" | "b" | "c" | "d";

export type TrueFalseItem = {
  id: TrueFalseItemId;
  content: ContentPart[];
  correct: boolean;
  explanation: string;
};

export type TrueFalseQuestion = {
  id: string;
  lessonId: LessonId;
  number: number;
  type: "true-false";
  prompt: ContentPart[];
  items: TrueFalseItem[];
};

export type Question = ChoiceQuestion | TrueFalseQuestion;
