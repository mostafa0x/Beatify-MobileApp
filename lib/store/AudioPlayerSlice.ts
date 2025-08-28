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
  onTrack: null,
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
    setNewPlayList: (state) => {
      state.currentPlayList = state.playListTracks;
      state.currentPlayListId = state.playListId;
      state.currentTrack = state.playListTracks[0];
      state.cureentIndex = 0;
      state.isPlayingPlayer = true;
    },
    setOnTrack: (state, action) => {
      state.onTrack = action.payload;
    },
    setPlaySongInSamePlayList: (state, action) => {
      const songId = action.payload;
      const track = state.currentPlayList.find((item) => item?.id == songId);
      const indexSong = state.currentPlayList.findIndex(
        (item) => item.id == songId
      );
      if (track && indexSong) {
        state.currentTrack = track;
        state.cureentIndex = indexSong;
        state.isPlayingPlayer = true;
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
  setNewPlayList,
  setOnTrack,
  setPlaySongInSamePlayList,
} = AudioPlayerSlice.actions;
