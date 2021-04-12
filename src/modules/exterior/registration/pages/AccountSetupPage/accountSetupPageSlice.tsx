import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type AccountSetupStage =
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

interface AccountSetupPageState {
  stage: AccountSetupStage;
  fullName: string;
  workType: WorkType;
  mainObjective: MainObjective;
  projectName: string;
  projectTasks: string[] | null;
  taskGroupings: [string, string, string] | null;
}

const initialState: AccountSetupPageState = {
  stage: "accountInfo",
  fullName: "",
  workType: null,
  mainObjective: null,
  projectName: "",
  projectTasks: null,
  taskGroupings: null,
};

const accountSetupPageSlice = createSlice({
  name: "accountSetupPage",
  initialState,
  reducers: {
    setStage(state, action: PayloadAction<AccountSetupStage>) {
      state.stage = action.payload;
    },
    setFullName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
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
      action.payload.forEach((task) => {
        if (task) {
          state.projectTasks = [];
          state.projectTasks.push(task);
        }
      });
    },
    setTaskGroupings(state, action: PayloadAction<[string, string, string]>) {
      state.taskGroupings = action.payload;
    },
    resetAccountSetupPage() {
      return initialState;
    },
  },
});

export const {
  setStage,
  setFullName,
  setWorkType,
  setMainObjective,
  setProjectName,
  setProjectTasks,
  setTaskGroupings,
  resetAccountSetupPage,
} = accountSetupPageSlice.actions;

export const selectAccountSetupStage = (state: RootState) =>
  state.registration.accountSetupPage.stage;

export const selectFullName = (state: RootState) =>
  state.registration.accountSetupPage.fullName;

export const selectProjectName = (state: RootState) =>
  state.registration.accountSetupPage.projectName;

export const selectProjectTasks = (state: RootState) =>
  state.registration.accountSetupPage.projectTasks;

export const selectAccountSetupInfo = (state: RootState) => {
  const {
    fullName,
    workType,
    mainObjective,
    projectName,
    projectTasks,
    taskGroupings,
  } = state.registration.accountSetupPage;

  const accountSetupInfo = {
    profileInfo: { fullName, workType, mainObjective },
    projectInfo: { projectName, projectTasks, taskGroupings },
  };

  return accountSetupInfo;
};

export default accountSetupPageSlice.reducer;
