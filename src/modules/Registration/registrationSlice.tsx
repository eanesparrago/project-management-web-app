import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface RegistrationState {
  emailAddress: string;
}

const initialState: RegistrationState = {
  emailAddress: "",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload;
    },
  },
});

export const { setEmailAddress } = registrationSlice.actions;

export const selectEmailAddress = (state: RootState) =>
  state.registration.root.emailAddress;

export default registrationSlice.reducer;
