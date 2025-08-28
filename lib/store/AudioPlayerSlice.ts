import { AudioPlayerSliceType } from "@/types/store/AudioPlayerSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AudioPlayerSliceType = {
  currentTrack: null,
  tracks: [],
  cureentIndex: 0,
  isPlayingPlayer: false,
};

const AudioPlayerSlice = createSlice({
  name: "AudioPlayerSlice",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
      state.currentTrack = action.payload[0];
      state.cureentIndex = 0;
    },
    setCurrentTrack: (state, action) => {
      state.cureentIndex = action.payload;
    },

    setCurrentIndex: (state, action) => {
      if (action.payload == -1) {
        if (state.cureentIndex < state.tracks.length - 1) {
          state.cureentIndex = state.cureentIndex++;
          state.currentTrack = state.tracks[state.cureentIndex++];
        }
      } else {
        state.cureentIndex = action.payload;
      }
    },
    setIsPlayingPlayer: (state, action) => {
      state.isPlayingPlayer = action.payload;
    },
  },
});

export const AudioPlayerReducer = AudioPlayerSlice.reducer;
export const {
  setCurrentTrack,
  setTracks,
  setIsPlayingPlayer,
  setCurrentIndex,
} = AudioPlayerSlice.actions;
