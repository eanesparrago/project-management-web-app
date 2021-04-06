import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registrationReducer from "modules/registration/registrationReducer";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
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
