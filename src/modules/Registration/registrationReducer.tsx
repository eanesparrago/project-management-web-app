import { combineReducers } from "redux";
import registrationSlice from "./registrationSlice";
import accountSetupPageSlice from "./pages/AccountSetupPage/accountSetupPageSlice";

export default combineReducers({
  root: registrationSlice,
  accountSetupPage: accountSetupPageSlice,
});
