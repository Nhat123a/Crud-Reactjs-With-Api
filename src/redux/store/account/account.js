import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../../slice/account/accountSlice";
export const accountStore = configureStore({
  reducer: {
    auth: userReducer,
  },
});
export default accountStore;
