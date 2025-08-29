import { AppSliceType } from "@/types/store/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  genreActive: 0,
  favouritesList: [],
};

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setGenreActive: (state, action) => {
      state.genreActive = action.payload;
    },
    setFavouritesList: (state, action) => {
      state.favouritesList = action.payload;
    },
    pushToFavouritesList: (state, action) => {
      state.favouritesList = [action.payload, ...state.favouritesList];
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { setGenreActive, setFavouritesList, pushToFavouritesList } =
  AppSlice.actions;
