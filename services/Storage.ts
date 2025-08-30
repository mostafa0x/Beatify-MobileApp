import { SongType } from "@/types/SongType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavouritesList = async () => {
  try {
    const store = await AsyncStorage.getItem("@FavouritesList");

    const data: SongType[] = store ? JSON.parse(store) : [];

    return data;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const setFavouritesListStorage = async (
  data: SongType[],
  song: SongType
) => {
  try {
    const newOne = [song, ...data];
    await AsyncStorage.setItem("@FavouritesList", JSON.stringify(newOne));

    return true;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const removeSongFromFavourites = async (
  songId: number,
  data: SongType[]
) => {
  try {
    const newOne = data.filter((song) => song.id !== songId);
    await AsyncStorage.setItem("@FavouritesList", JSON.stringify(newOne));

    return newOne;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const setNewUser = async () => {
  try {
    await AsyncStorage.setItem("@newUser", "1");
    return true;
  } catch (err: any) {
    throw err;
  }
};

export const getNewUser = async () => {
  try {
    const key = await AsyncStorage.getItem("@newUser");
    return key && parseInt(key) == 1 ? false : true;
  } catch (err: any) {
    throw err;
  }
};
