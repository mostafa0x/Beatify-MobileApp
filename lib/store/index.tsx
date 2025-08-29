import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./AppSlice";
import { AudioPlayerReducer } from "./AudioPlayerSlice";

export const store = configureStore({
  reducer: { AppReducer, AudioPlayerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
