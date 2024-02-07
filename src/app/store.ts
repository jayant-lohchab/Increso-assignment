import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import FilterSlice from '../features/FilterSlice';
import JobsSlice from '../features/JobsSlice';

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    jobsPostings: JobsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
