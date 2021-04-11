import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registrationReducer from "modules/exterior/registration/registrationReducer";
import projectHeaderSlice from "modules/ProjectHeader/projectHeaderSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    projectHeader: projectHeaderSlice,
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
