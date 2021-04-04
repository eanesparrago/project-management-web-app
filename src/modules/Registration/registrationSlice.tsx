import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type RegistrationStage =
  | "accountInfo"
  | "aboutYourself"
  | "mainObjective"
  | "firstProject"
  | "projectTasks"
  | "taskGroupings";

export type WorkType =
  | "marketing"
  | "product"
  | "design"
  | "operations"
  | "sales"
  | "customerSuccess"
  | "hr"
  | "it"
  | "engineering"
  | "generalProjectManagement"
  | null;

export type MainObjective =
  | "goalManagement"
  | "portfolioAndWorkloadManagement"
  | "projectAndProcessManagement"
  | "personalTaskManagement"
  | null;

interface RegistrationState {
  stage: RegistrationStage;
  fullName: string;
  password: string;
  workType: WorkType;
  mainObjective: MainObjective;
  projectName: string;
  projectTasks: [string, string, string] | null;
  taskGroupings: [string, string, string] | null;
}

const initialState: RegistrationState = {
  stage: "accountInfo",
  fullName: "",
  password: "",
  workType: null,
  mainObjective: null,
  projectName: "",
  projectTasks: null,
  taskGroupings: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setStage(state, action: PayloadAction<RegistrationStage>) {
      state.stage = action.payload;
    },
    setFullName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setWorkType(state, action: PayloadAction<WorkType>) {
      state.workType = action.payload;
    },
    setMainObjective(state, action: PayloadAction<MainObjective>) {
      state.mainObjective = action.payload;
    },
    setProjectName(state, action: PayloadAction<string>) {
      state.projectName = action.payload;
    },
    setProjectTasks(state, action: PayloadAction<[string, string, string]>) {
      state.projectTasks = action.payload;
    },
    setTaskGroupings(state, action: PayloadAction<[string, string, string]>) {
      state.taskGroupings = action.payload;
    },
  },
});

export const {
  setStage,
  setFullName,
  setPassword,
  setWorkType,
  setMainObjective,
  setProjectName,
  setProjectTasks,
  setTaskGroupings,
} = registrationSlice.actions;

export const selectRegistrationStage = (state: RootState) =>
  state.registration.stage;

export const selectFullName = (state: RootState) => state.registration.fullName;

export const selectPassword = (state: RootState) => state.registration.password;

export const selectProjectName = (state: RootState) =>
  state.registration.projectName;

export const selectProjectTasks = (state: RootState) =>
  state.registration.projectTasks;

export default registrationSlice.reducer;
