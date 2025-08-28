import { TrackType } from "../PlayListType";

export interface AudioPlayerSliceType {
  tracks: TrackType[];
  currentTrack: number;
}
