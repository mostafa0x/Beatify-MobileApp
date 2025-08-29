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
  isPlayingPlayer: false,
  onTrack: null,
  playListTracks: [],
  playListId: null,
  cureentIndex: 0,
  currentTrack: null,
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
    },
    setPlay: (state, action) => {
      let index = -1;
      if (action.payload !== -1) {
        index = state.playListTracks.findIndex(
          (item) => item?.id == action.payload
        );
      } else {
        index = 0;
      }

      if (index !== -1) {
        state.cureentIndex = index;
        state.currentTrack = state.playListTracks[index];
        state.currentPlayList = state.playListTracks;
        state.currentPlayListId = state.currentPlayListId;
      }
    },
    setNextSong: (state) => {
      if (state.cureentIndex >= state.currentPlayList.length - 1) {
        state.cureentIndex = 0;
        state.currentTrack = state.currentPlayList[0];
        state.currentPlayListId = state.currentPlayListId;
      } else {
        state.cureentIndex = state.cureentIndex + 1;
        state.currentTrack = state.currentPlayList[state.cureentIndex];
      }
    },
    setIsPlayingPlayer: (state, action) => {
      state.isPlayingPlayer = action.payload;
    },
    setOnTrack: (state, action) => {
      state.onTrack = action.payload;
    },
  },
});

export const AudioPlayerReducer = AudioPlayerSlice.reducer;
export const {
  setTracks,
  setIsPlayingPlayer,
  setPlay,
  setOnTrack,
  setNextSong,
} = AudioPlayerSlice.actions;
