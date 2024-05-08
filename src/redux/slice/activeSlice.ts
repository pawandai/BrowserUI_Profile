'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface activeState {
  value: number;
}

const initialState: activeState = {
  value: 1,
};

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    addState: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { addState } = activeSlice.actions;

export const selectActive = (state: RootState) => state.active.value;

export default activeSlice.reducer;
