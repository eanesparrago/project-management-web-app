import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registrationSlice from "modules/Registration/registrationSlice";

export const store = configureStore({
  reducer: {
    registration: registrationSlice,
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
