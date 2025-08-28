import { AudioPlayerSliceType } from "@/types/store/AudioPlayerSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AudioPlayerSliceType = {
  currentTrack: 0,
  tracks: [],
};

const AudioPlayerSlice = createSlice({
  name: "AudioPlayerSlice",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const AudioPlayerReducer = AudioPlayerSlice.reducer;
export const { setCurrentTrack, setTracks } = AudioPlayerSlice.actions;
