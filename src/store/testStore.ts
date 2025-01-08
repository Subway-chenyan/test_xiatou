import { create } from 'zustand';
import { Question, UserInfo } from '../types';
import { questions, calculateResult, getResultDescription } from '../data/questions';

interface TestState {
  currentQuestionIndex: number;
  answers: Record<number, { moralScore: number; actionScore: number }>;
  userInfo: UserInfo | null;
  moralScore: number;
  actionScore: number;
  setAnswer: (questionId: number, moralScore: number, actionScore: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  setUserInfo: (info: UserInfo) => void;
  resetTest: () => void;
  calculateScores: () => void;
}

export const useTestStore = create<TestState>((set, get) => ({
  currentQuestionIndex: 0,
  answers: {},
  userInfo: null,
  moralScore: 0,
  actionScore: 0,
  
  setAnswer: (questionId: number, moralScore: number, actionScore: number) => {
    set((state) => ({
      answers: { ...state.answers, [questionId]: { moralScore, actionScore } },
    }));
    get().calculateScores();
    get().nextQuestion();
  },
  
  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }));
  },
  
  previousQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
    }));
  },
  
  setUserInfo: (info: UserInfo) => {
    set({ userInfo: info });
  },
  
  resetTest: () => {
    set({
      currentQuestionIndex: 0,
      answers: {},
      userInfo: null,
      moralScore: 0,
      actionScore: 0,
    });
  },

  calculateScores: () => {
    const { answers } = get();
    let totalMoralScore = 0;
    let totalActionScore = 0;

    Object.values(answers).forEach(({ moralScore, actionScore }) => {
      totalMoralScore += moralScore;
      totalActionScore += actionScore;
    });

    set({ moralScore: totalMoralScore, actionScore: totalActionScore });
  },
}));