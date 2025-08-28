import { TrackType } from "../PlayListType";

export interface AudioPlayerSliceType {
  playListTracks: TrackType[];
  currentTrack: TrackType | null;
  cureentIndex: number;
  isPlayingPlayer: boolean;
  currentPlayList: TrackType[];
  currentPlayListId: number | null;
  playListId: number | null;
  onTrack: TrackType | null;
}
