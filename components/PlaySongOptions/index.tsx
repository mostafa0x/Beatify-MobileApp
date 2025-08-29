import { setNextSong, setPrevSong } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SkipBackIcon from "../Icons/SkipBackIcon";
import SkipforwardICon from "../Icons/SkipforwardICon";
import SongPlayBtn from "../Icons/SongPlayBtn";

export default function PlaySongOptions() {
  const dispatch = useDispatch();
  const { currentPlayListId, playListId, currentPlayList } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );
  const isSamePlayList = currentPlayListId == playListId;
  return (
    <View style={styles.container}>
      {isSamePlayList && currentPlayList.length > 0 && (
        <TouchableOpacity onPress={() => dispatch(setPrevSong())}>
          <SkipBackIcon />
        </TouchableOpacity>
      )}
      <SongPlayBtn size={{ w: 64, h: 64 }} />
      {isSamePlayList && currentPlayList.length > 0 && (
        <TouchableOpacity onPress={() => dispatch(setNextSong())}>
          <SkipforwardICon />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: rw(24),
  },
});
