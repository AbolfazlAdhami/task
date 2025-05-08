import { configureStore } from "@reduxjs/toolkit";
import domainReducer from "./reducer/domainSlice";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
});
