import { TrackType } from "../PlayListType";

export interface AudioPlayerSliceType {
  tracks: TrackType[];
  currentTrack: TrackType | null;
  cureentIndex: number;
  isPlayingPlayer: boolean;
  position: number;
}
