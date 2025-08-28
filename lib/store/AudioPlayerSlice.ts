import { AudioPlayerSliceType } from "@/types/store/AudioPlayerSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AudioPlayerSliceType = {
  currentTrack: null,
  tracks: [],
  cureentIndex: 0,
  isPlayingPlayer: false,
  position: 0,
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
    setIsPlayingPlayer: (state) => {
      state.isPlayingPlayer = state.isPlayingPlayer ? false : true;
      console.log(state.isPlayingPlayer);
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});

export const AudioPlayerReducer = AudioPlayerSlice.reducer;
export const { setCurrentTrack, setTracks, setIsPlayingPlayer, setPosition } =
  AudioPlayerSlice.actions;
