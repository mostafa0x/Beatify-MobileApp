import { genreType } from "../genreType";
import { SongType } from "../SongType";

export interface AppSliceType {
  genreActive: number;
  favouritesList: SongType[];
  genreList: genreType[];
  isLoadingFromStorage: boolean;
}
