"use client";

import {
  Eye,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import { lessons, questions } from "@/lib/quiz-data";
import type {
  ChoiceOptionId,
  ContentPart,
  LessonId,
  Question,
  TrueFalseItemId
} from "@/lib/quiz-types";
import {
  answerLabel,
  type AnswerRecord,
  createRuntimeQuestions,
  getWrongQuestions,
  isChoiceCorrect,
  isTrueFalseCorrect,
  type QuizMode,
  type RuntimeQuestion
} from "@/lib/quiz-engine";

type Screen = "home" | "quiz" | "results";

type ActiveQuiz = {
  title: string;
  mode: QuizMode;
  sourceLessonId: LessonId | "all" | "wrong";
  questions: RuntimeQuestion[];
};

type ChoiceFeedback = {
  kind: "choice";
  selectedOptionId: ChoiceOptionId;
  correctOptionId: ChoiceOptionId;
  isCorrect: boolean;
};

type TrueFalseFeedback = {
  kind: "true-false";
  selections: Record<TrueFalseItemId, boolean>;
};

type Feedback = ChoiceFeedback | TrueFalseFeedback;

const optionLabels = ["A", "B", "C", "D"] as const;

export function QuizApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedLessonId, setSelectedLessonId] = useState<LessonId | "all">("23");
  const [activeQuiz, setActiveQuiz] = useState<ActiveQuiz | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [draftTrueFalse, setDraftTrueFalse] = useState<
    Partial<Record<TrueFalseItemId, boolean>>
  >({});
  const [latestWrongQuestions, setLatestWrongQuestions] = useState<Question[]>([]);
  const [imagePreview, setImagePreview] = useState<{ src: string; alt: string } | null>(
    null
  );

  const questionsByLesson = useMemo(() => {
    return lessons.map((lesson) => ({
      ...lesson,
      questions: questions.filter((question) => question.lessonId === lesson.id)
    }));
  }, []);

  const startQuiz = (
    sourceLessonId: LessonId | "all" | "wrong",
    mode: QuizMode,
    sourceQuestions?: readonly Question[]
  ) => {
    const selectedQuestions =
      sourceQuestions ??
      (sourceLessonId === "all"
        ? questions
        : questions.filter((question) => question.lessonId === sourceLessonId));

    if (selectedQuestions.length === 0) {
      return;
    }

    const title =
      mode === "wrong"
        ? "Ôn câu sai"
        : sourceLessonId === "all"
          ? "Tổng hợp Bài 23-27"
          : lessons.find((lesson) => lesson.id === sourceLessonId)?.title ?? "Làm bài";

    setActiveQuiz({
      title,
      mode,
      sourceLessonId,
      questions: createRuntimeQuestions(selectedQuestions)
    });
    setCurrentIndex(0);
    setAnswers([]);
    setFeedback(null);
    setDraftTrueFalse({});
    setScreen("quiz");
  };

  const finishQuiz = (nextAnswers: AnswerRecord[], quiz = activeQuiz) => {
    if (!quiz) {
      return;
    }

    const wrong = getWrongQuestions(quiz.questions, nextAnswers).map((question) => {
      const original = questions.find((item) => item.id === question.id);
      return original ?? question;
    });

    setAnswers(nextAnswers);
    setLatestWrongQuestions(wrong);
    setFeedback(null);
    setDraftTrueFalse({});
    setScreen("results");
  };

  const moveAfterFeedback = (nextAnswers: AnswerRecord[]) => {
    window.setTimeout(() => {
      if (!activeQuiz) {
        return;
      }

      if (currentIndex >= activeQuiz.questions.length - 1) {
        finishQuiz(nextAnswers, activeQuiz);
        return;
      }

      setAnswers(nextAnswers);
      setCurrentIndex((value) => value + 1);
      setFeedback(null);
      setDraftTrueFalse({});
    }, 1000);
  };

  const answerChoice = (selectedOptionId: ChoiceOptionId) => {
    if (!activeQuiz || feedback) {
      return;
    }

    const question = activeQuiz.questions[currentIndex];
    if (question.type !== "choice") {
      return;
    }

    const correct = isChoiceCorrect(question, selectedOptionId);
    const record: AnswerRecord = {
      questionId: question.id,
      type: "choice",
      selectedOptionId,
      correct
    };
    const nextAnswers = [...answers, record];

    setFeedback({
      kind: "choice",
      selectedOptionId,
      correctOptionId: question.correctOptionId,
      isCorrect: correct
    });
    moveAfterFeedback(nextAnswers);
  };

  const answerTrueFalse = (itemId: TrueFalseItemId, value: boolean) => {
    if (!activeQuiz || feedback) {
      return;
    }

    const question = activeQuiz.questions[currentIndex];
    if (question.type !== "true-false") {
      return;
    }

    const nextDraft = {
      ...draftTrueFalse,
      [itemId]: value
    };

    setDraftTrueFalse(nextDraft);

    const complete = question.items.every((item) => typeof nextDraft[item.id] === "boolean");
    if (!complete) {
      return;
    }

    const selections = nextDraft as Record<TrueFalseItemId, boolean>;
    const correct = isTrueFalseCorrect(question, selections);
    const record: AnswerRecord = {
      questionId: question.id,
      type: "true-false",
      selections,
      correct
    };
    const nextAnswers = [...answers, record];

    setFeedback({
      kind: "true-false",
      selections
    });
    moveAfterFeedback(nextAnswers);
  };

  const currentQuestion = activeQuiz?.questions[currentIndex];
  const progress =
    activeQuiz && activeQuiz.questions.length > 0
      ? Math.round(((currentIndex + 1) / activeQuiz.questions.length) * 100)
      : 0;

  return (
    <main className="app-shell">
      {screen === "home" && (
        <section className="home-panel">
          <h1 className="home-title">Tin học 23–27</h1>

          <div className="lesson-grid" aria-label="Chọn bộ câu hỏi">
            {questionsByLesson.map((lesson) => (
              <button
                className="lesson-card"
                key={lesson.id}
                onClick={() => startQuiz(lesson.id, "lesson")}
                type="button"
              >
                <span>{lesson.title}</span>
                <strong>{lesson.questions.length} câu</strong>
              </button>
            ))}
            <button
              className="lesson-card wide"
              onClick={() => startQuiz("all", "all")}
              type="button"
            >
              <span>Tất cả</span>
              <strong>{questions.length} câu</strong>
            </button>
          </div>

          {latestWrongQuestions.length > 0 && (
            <button
              className="secondary-action"
              onClick={() => startQuiz("wrong", "wrong", latestWrongQuestions)}
              type="button"
            >
              Ôn {latestWrongQuestions.length} câu sai
            </button>
          )}
        </section>
      )}

      {screen === "quiz" && activeQuiz && currentQuestion && (
        <section className="quiz-panel">
          <header className="quiz-header">
            <button className="ghost-button" onClick={() => setScreen("home")} type="button">
              <X size={19} aria-hidden="true" />
              Thoát
            </button>
            <div className="quiz-title">
              <span>{activeQuiz.title}</span>
              <strong>
                Câu {currentIndex + 1}/{activeQuiz.questions.length}
              </strong>
            </div>
          </header>

          <div className="progress-track" aria-label={`Tiến độ ${progress}%`}>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <article className="question-card">
            <div className="question-meta">
              <span>Bài {currentQuestion.lessonId}</span>
              <span>Câu {currentQuestion.number}</span>
            </div>
            <h2>
              <RichContent parts={currentQuestion.prompt} onPreview={setImagePreview} />
            </h2>
          </article>

          {currentQuestion.type === "choice" ? (
            <div className="answer-stack">
              {currentQuestion.shuffledOptions.map((option, index) => {
                const currentLabel = optionLabels[index];
                const className = getChoiceButtonClass(option.id, feedback);

                return (
                  <button
                    className={className}
                    disabled={Boolean(feedback)}
                    key={option.id}
                    onClick={() => answerChoice(option.id)}
                    type="button"
                  >
                    <span className="answer-label">{currentLabel}</span>
                    <span className="answer-content">
                      <RichContent parts={option.content} onPreview={setImagePreview} />
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="tf-stack">
              {currentQuestion.items.map((item) => {
                const chosen = draftTrueFalse[item.id];
                const itemFeedback =
                  feedback?.kind === "true-false" ? feedback.selections[item.id] : undefined;

                return (
                  <div className="tf-row" key={item.id}>
                    <div className="tf-copy">
                      <span>{item.id})</span>
                      <RichContent parts={item.content} onPreview={setImagePreview} />
                    </div>
                    <div className="tf-controls" aria-label={`Chọn đúng hoặc sai cho ý ${item.id}`}>
                      {[true, false].map((value) => {
                        const selected = chosen === value;
                        const feedbackClass = getTrueFalseButtonClass(
                          value,
                          item.correct,
                          itemFeedback
                        );

                        return (
                          <button
                            className={`tf-button ${selected ? "selected" : ""} ${feedbackClass}`}
                            disabled={Boolean(feedback)}
                            key={String(value)}
                            onClick={() => answerTrueFalse(item.id, value)}
                            type="button"
                          >
                            {answerLabel(value)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {screen === "results" && activeQuiz && (
        <ResultsView
          answers={answers}
          imagePreview={setImagePreview}
          latestWrongCount={latestWrongQuestions.length}
          onBackHome={() => setScreen("home")}
          onRetry={() =>
            startQuiz(activeQuiz.sourceLessonId, activeQuiz.mode, getOriginalQuestions(activeQuiz))
          }
          onWrongReview={() => startQuiz("wrong", "wrong", latestWrongQuestions)}
          quiz={activeQuiz}
        />
      )}

      {imagePreview && (
        <button className="image-modal" onClick={() => setImagePreview(null)} type="button">
          <span>
            <img alt={imagePreview.alt} src={imagePreview.src} />
          </span>
        </button>
      )}
    </main>
  );
}

function getOriginalQuestions(quiz: ActiveQuiz) {
  if (quiz.mode === "wrong") {
    return quiz.questions.map((runtimeQuestion) => {
      const original = questions.find((question) => question.id === runtimeQuestion.id);
      return original ?? runtimeQuestion;
    });
  }

  if (quiz.sourceLessonId === "all") {
    return questions;
  }

  return questions.filter((question) => question.lessonId === quiz.sourceLessonId);
}

function ResultsView({
  answers,
  imagePreview,
  latestWrongCount,
  onBackHome,
  onRetry,
  onWrongReview,
  quiz
}: {
  answers: AnswerRecord[];
  imagePreview: (image: { src: string; alt: string }) => void;
  latestWrongCount: number;
  onBackHome: () => void;
  onRetry: () => void;
  onWrongReview: () => void;
  quiz: ActiveQuiz;
}) {
  const answerByQuestion = new Map(answers.map((answer) => [answer.questionId, answer]));
  const correctCount = answers.filter((answer) => answer.correct).length;

  return (
    <section className="results-panel">
      <div className="result-hero">
        <div className="score-ring" aria-label={`${correctCount} trên ${quiz.questions.length}`}>
          <strong>{correctCount}</strong>
          <span>/{quiz.questions.length}</span>
        </div>
        <h1>{correctCount}/{quiz.questions.length} đúng</h1>
      </div>

      <div className="action-row compact">
        <button className="primary-action" onClick={onRetry} type="button">
          Làm lại
        </button>
        {latestWrongCount > 0 && (
          <button
            className="secondary-action"
            onClick={onWrongReview}
            type="button"
          >
            Ôn {latestWrongCount} câu sai
          </button>
        )}
        <button className="ghost-button solid" onClick={onBackHome} type="button">
          Chọn bài
        </button>
      </div>

      <div className="review-list">
        {quiz.questions.map((question, index) => {
          const answer = answerByQuestion.get(question.id);

          return (
            <article
              className={`review-card ${answer?.correct ? "correct" : "incorrect"}`}
              key={question.id}
            >
              <div className="review-heading">
                <span>
                  Câu {index + 1} · Bài {question.lessonId}.{question.number}
                </span>
                <strong>{answer?.correct ? "Đúng" : "Sai"}</strong>
              </div>
              <h2>
                <RichContent parts={question.prompt} onPreview={imagePreview} />
              </h2>

              {question.type === "choice" && answer?.type === "choice" && (
                <div className="review-answer">
                  <p>
                    <span>Đáp án của bạn</span>
                    <strong>{optionText(question, answer.selectedOptionId, imagePreview)}</strong>
                  </p>
                  <p>
                    <span>Đáp án đúng</span>
                    <strong>{optionText(question, question.correctOptionId, imagePreview)}</strong>
                  </p>
                  <p className="explanation">{question.explanation}</p>
                </div>
              )}

              {question.type === "true-false" && answer?.type === "true-false" && (
                <div className="tf-review-list">
                  {question.items.map((item) => {
                    const selected = answer.selections[item.id];
                    const itemCorrect = selected === item.correct;

                    return (
                      <div
                        className={`tf-review-item ${itemCorrect ? "tf-review-correct" : "tf-review-incorrect"}`}
                        key={item.id}
                      >
                        <div className="tf-review-item-header">
                          <div>
                            <strong>{item.id})</strong>{" "}
                            <RichContent parts={item.content} onPreview={imagePreview} />
                          </div>
                          <span className={`tf-review-badge ${itemCorrect ? "badge-good" : "badge-bad"}`}>
                            {itemCorrect ? "✓ Đúng" : "✗ Sai"}
                          </span>
                        </div>
                        <p>
                          Bạn chọn: <strong>{answerLabel(selected)}</strong> · Đáp án đúng:{" "}
                          <strong>{answerLabel(item.correct)}</strong>
                        </p>
                        <p className="explanation">{item.explanation}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function optionText(
  question: Extract<Question, { type: "choice" }>,
  optionId: ChoiceOptionId,
  onPreview: (image: { src: string; alt: string }) => void
) {
  const option = question.options.find((item) => item.id === optionId);

  if (!option) {
    return optionId;
  }

  return <RichContent parts={option.content} onPreview={onPreview} />;
}

function RichContent({
  parts,
  onPreview
}: {
  parts: ContentPart[];
  onPreview: (image: { src: string; alt: string }) => void;
}) {
  return (
    <>
      {parts.map((part, index) => {
        if (part.type === "text") {
          return <span key={`${part.type}-${index}`}>{part.text}</span>;
        }

        return (
          <span
            className="inline-image-button"
            role="button"
            tabIndex={0}
            key={`${part.src}-${index}`}
            onClick={(event) => {
              event.stopPropagation();
              onPreview({ src: part.src, alt: part.alt });
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.stopPropagation();
                onPreview({ src: part.src, alt: part.alt });
              }
            }}
          >
            <img alt={part.alt} src={part.src} />
            <Eye size={15} aria-hidden="true" />
          </span>
        );
      })}
    </>
  );
}

function getChoiceButtonClass(optionId: ChoiceOptionId, feedback: Feedback | null) {
  if (!feedback || feedback.kind !== "choice") {
    return "answer-button";
  }

  if (optionId === feedback.correctOptionId) {
    return "answer-button correct-flash";
  }

  if (!feedback.isCorrect && optionId === feedback.selectedOptionId) {
    return "answer-button wrong-flash";
  }

  return "answer-button muted";
}

function getTrueFalseButtonClass(
  buttonValue: boolean,
  correctValue: boolean,
  selectedValue: boolean | undefined
) {
  if (typeof selectedValue !== "boolean") {
    return "";
  }

  if (buttonValue === correctValue) {
    return "correct-flash";
  }

  if (buttonValue === selectedValue && selectedValue !== correctValue) {
    return "wrong-flash";
  }

  return "muted";
}
