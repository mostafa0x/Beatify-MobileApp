import { setIsPlayingPlayer } from "@/lib/store/AudioPlayerSlice";
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

export default function CricelBtn({
  size = { w: 56, h: 56 },
}: {
  size: sizeType;
}) {
  const { w, h } = size;
  const dispatch = useDispatch();
  const { isPlayingPlayer } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );
  const btns = {
    play: require("@/assets/images/playBtn.png"),
    pause: require("@/assets/images/pauseBtn.png"),
  };
  return (
    <TouchableOpacity
      onPress={() =>
        isPlayingPlayer
          ? dispatch(setIsPlayingPlayer(false))
          : dispatch(setIsPlayingPlayer(true))
      }
    >
      <Image
        style={{ width: rw(w), height: rh(h) }}
        source={btns[isPlayingPlayer ? "pause" : "play"]}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
