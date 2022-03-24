import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { garageReducer } from './user/garage-reducer';

export const store = configureStore({
  reducer: {
    garage: garageReducer,
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
