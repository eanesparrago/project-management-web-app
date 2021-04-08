import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface ProjectHeaderState {
  isEditProjectDetailsModalOpen: boolean;
}

const initialState: ProjectHeaderState = {
  isEditProjectDetailsModalOpen: false,
};

const projectHeaderSlice = createSlice({
  name: "projectHeader",
  initialState,
  reducers: {
    setIsEditProjectDetailsModalOpen(state, action: PayloadAction<boolean>) {
      state.isEditProjectDetailsModalOpen = action.payload;
    },
  },
});

export const { setIsEditProjectDetailsModalOpen } = projectHeaderSlice.actions;

export const selectIsEditProjectDetailsModalOpen = (state: RootState) =>
  state.projectHeader.isEditProjectDetailsModalOpen;

export default projectHeaderSlice.reducer;
