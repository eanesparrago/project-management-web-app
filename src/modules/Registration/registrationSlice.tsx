import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type RegistrationStage =
  | "accountInfo"
  | "aboutYourself"
  | "mainObjective"
  | "firstProject"
  | "projectTasks"
  | "taskGroupings";

interface RegistrationState {
  stage: RegistrationStage;
}

const initialState: RegistrationState = {
  stage: "accountInfo",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
});

export const selectRegistrationStage = (state: RootState) =>
  state.registration.stage;

export default registrationSlice.reducer;
