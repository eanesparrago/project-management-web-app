import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registrationReducer from "modules/exterior/registration/registrationReducer";
import projectHeaderSlice from "modules/mainApp/ProjectHeader/projectHeaderSlice";
import appReducer from "./appReducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
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
