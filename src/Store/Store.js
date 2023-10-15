import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/music";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
