import { setIsPlayingPlayer, setPlay } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type sizeType = {
  w: number;
  h: number;
};

export default function PlayListBtn({
  size = { w: 56, h: 56 },
}: {
  size: sizeType;
}) {
  const { w, h } = size;
  const dispatch = useDispatch();
  const {
    isPlayingPlayer,
    currentTrack,
    currentPlayList,
    playListId,
    currentPlayListId,
  } = useSelector((state: StateType) => state.AudioPlayerReducer);
  const btns = {
    play: require("@/assets/images/playBtn.png"),
    pause: require("@/assets/images/pauseBtn.png"),
  };
  return (
    <TouchableOpacity
      onPress={() => {
        playListId == currentPlayListId
          ? isPlayingPlayer
            ? dispatch(setIsPlayingPlayer(false))
            : dispatch(setIsPlayingPlayer(true))
          : dispatch(setPlay(-1));
      }}
    >
      <Image
        style={{ width: rw(w), height: rh(h) }}
        source={
          btns[
            playListId == currentPlayListId
              ? isPlayingPlayer
                ? "pause"
                : "play"
              : "play"
          ]
        }
        contentFit="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
