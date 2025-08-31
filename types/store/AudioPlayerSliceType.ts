import { SongType } from "../SongType";

export interface AudioPlayerSliceType {
  playListTracks: SongType[];
  currentTrack: SongType | null;
  cureentIndex: number;
  isPlayingPlayer: boolean;
  currentPlayList: SongType[];
  currentPlayListId: number | null;
  playListId: number | null;
  onTrack: SongType | null;
  isLoadingSong: boolean;
}
