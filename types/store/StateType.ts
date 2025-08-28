import { AppSliceType } from "./AppSliceType";
import { AudioPlayerSliceType } from "./AudioPlayerSliceType";

export interface StateType {
  AppReducer: AppSliceType;
  AudioPlayerReducer: AudioPlayerSliceType;
}
