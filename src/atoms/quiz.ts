import { atom } from "recoil";

const defaultQuizConfigState: {
  count: QuizCount;
  level: QuizLevel;
} = {
  count: null,
  level: null,
};

export const quizConfigState = atom({
  key: "quizConfig",
  default: defaultQuizConfigState,
});

export const pickAnswerListState = atom<string[]>({
  key: "pickAnswerList",
  default: [],
});
