import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./AppSlice";
import { AudioPlayerReducer } from "./AudioPlayerSlice";

export const store = configureStore({
  reducer: { AppReducer, AudioPlayerReducer },
});
