import { configureStore } from "@reduxjs/toolkit";
import loanReducer from "../Redux/loanSlice";

export const store = configureStore({
  reducer: {
    loan: loanReducer,
  },
});
