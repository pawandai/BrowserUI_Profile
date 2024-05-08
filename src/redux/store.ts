'use client';

import { configureStore } from '@reduxjs/toolkit';
import activeReducer from './slice/activeSlice';

export const store = configureStore({
  reducer: {
    active: activeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
