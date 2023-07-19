import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quiz: [],
  latestquiz: [],
  playquiz: [],
  editquiz: [],
  finalanswers: [],
  name: '',
  answer: '',
};

// We can define reducers and generate related actions using the'reducers' property.
/**
 * 1) The name of the quiz taker is saved in redux state 'getName' reducer.
 * 2) 'addQuiz' reducer saves quiz created in the New Form Page.
 * 3) 'latestQuiz' saves the most recent quiz to display saved questions.
 * 4) 'toggleActive' reducer toggles status.
 * 5) 'deleteQuiz' reducer deletes quiz.
 * 6) 'editQuiz' reducer display questions on the My Quizzes page.
 * 7) 'playQuiz' reducer makes user play the quiz.
 * 8) 'setAnswer' reducer makes select option.
 * 9) 'setFinalAnswer' reducer saves final answer.
 * 10) 'resetAnswer' reducer helps in resetting the answer for the next question.
 * 11) 'resetQuiz' reducer helps in resetting both answer and quiz at the same time.
 *
 */
export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    getName: (state, { payload }) => {
      state.name = payload;
    },

    addQuiz: (state, { payload }) => {
      state.quiz = [...state.quiz, payload];
    },

    latestQuiz: (state, { payload }) => {
      state.latestquiz = payload;
    },

    toggleActive: (state, { payload }) => {
      state.quiz.map((item) => {
        if (item.id === payload) item.isActive = !item.isActive;
        return item;
      });
    },

    deleteQuiz: (state, { payload }) => {
      const filteredArr = state.quiz.filter((item) => item.id !== payload);
      state.quiz = [...filteredArr];
    },

    editQuiz: (state, { payload }) => {
      state.editquiz = state.quiz.filter((item) => item.id === payload);
    },

    playQuiz: (state, { payload }) => {
      state.playquiz = state.quiz.find((item) => item.id === payload);
    },

    setAnswer: (state, { payload }) => {
      state.answer = payload;
    },
    setFinalAnswer: (state, { payload }) => {
      state.finalanswers = [...state.finalanswers, payload];
    },

    resetAnswer: (state) => {
      state.answer = '';
    },

    resetQuiz: (state) => {
      state.answer = '';
      state.finalanswers = [];
    },
  },
});

export const {
  getName,
  addQuiz,
  latestQuiz,
  toggleActive,
  deleteQuiz,
  editQuiz,
  playQuiz,
  setAnswer,
  setFinalAnswer,
  resetAnswer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
