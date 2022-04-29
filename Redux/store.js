import { configureStore } from "@reduxjs/toolkit";
import loanReducer from "../Redux/loanSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAPI } from "./ownApi";

export const store = configureStore({
  reducer: {
    loan: loanReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

setupListeners(store.dispatch);
