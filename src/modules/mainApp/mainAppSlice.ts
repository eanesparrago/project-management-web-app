import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type MainAppState = {
  isProfileSettingsModalOpen: boolean;
};

const initialState: MainAppState = {
  isProfileSettingsModalOpen: false,
};

const mainAppSlice = createSlice({
  name: "mainApp",
  initialState,
  reducers: {
    setIsProfileSettingsModalOpen(state, action: PayloadAction<boolean>) {
      state.isProfileSettingsModalOpen = action.payload;
    },
  },
});

export const { setIsProfileSettingsModalOpen } = mainAppSlice.actions;

export const selectIsProfileSettingsModalOpen = (state: RootState) =>
  state.mainApp.isProfileSettingsModalOpen;

export default mainAppSlice.reducer;
