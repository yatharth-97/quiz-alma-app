import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};
/**
 * Because the Select Question Type Modal renders as soon as the Create New Quiz Page
 *  loads, this Redux state is only needed for one modal.
 */
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
