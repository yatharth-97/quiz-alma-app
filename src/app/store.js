import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice';
import quizReducer from '../features/quizSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    quiz: quizReducer,
  },
});
