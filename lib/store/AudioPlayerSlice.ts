import { TrackType } from "@/types/PlayListType";
import { AudioPlayerSliceType } from "@/types/store/AudioPlayerSliceType";
import { createSlice } from "@reduxjs/toolkit";

interface ActionTrackType {
  type: string;
  payload: {
    id: number;
    data: TrackType[];
  };
}

const initialState: AudioPlayerSliceType = {
  playListTracks: [],
  playListId: null,
  isPlayingPlayer: false,
  currentTrack: null,
  cureentIndex: 0,
  currentPlayList: [],
  currentPlayListId: null,
};

const AudioPlayerSlice = createSlice({
  name: "AudioPlayerSlice",
  initialState,
  reducers: {
    setTracks: (state, action: ActionTrackType) => {
      state.playListTracks = action.payload.data;
      state.playListId = action.payload.id;
      if (state.currentTrack == null) {
        state.currentPlayList = action.payload.data;
        state.currentPlayListId = action.payload.id;
        state.currentTrack = action.payload.data[0];
        state.cureentIndex = 0;
      }
    },
    setCurrentTrack: (state, action) => {
      state.cureentIndex = action.payload;
    },

    setCurrentIndex: (state, action) => {
      if (action.payload == -1) {
        if (state.cureentIndex < state.playListTracks.length - 1) {
          state.cureentIndex = state.cureentIndex++;
          state.currentTrack = state.currentPlayList[state.cureentIndex++];
        }
      } else {
        state.cureentIndex = action.payload;
      }
    },
    setIsPlayingPlayer: (state, action) => {
      state.isPlayingPlayer = action.payload;
    },
    setPlayListId: (state, action) => {
      state.playListId = action.payload;
    },
  },
});

export const AudioPlayerReducer = AudioPlayerSlice.reducer;
export const {
  setCurrentTrack,
  setTracks,
  setIsPlayingPlayer,
  setCurrentIndex,
  setPlayListId,
} = AudioPlayerSlice.actions;
