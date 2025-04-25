// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import regionFilterReducer from 'features/region-filter/model/slice';
import sortReducer from 'features/population-sort/model/slice';
import searchReducer from 'features/country-search/model/slice';
export const store = configureStore({
  reducer: {
    regionFilter: regionFilterReducer,
    sort: sortReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;