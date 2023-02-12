import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterRedux(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilterRedux } = filterSlicer.actions;
