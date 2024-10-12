import { configureStore } from "@reduxjs/toolkit";

import user from "./slices/user";
import kyc from "./slices/kyc"
import postApp from "./slices/application"

export const store = configureStore({
  reducer: {
   kyc, user, postApp
  },
});