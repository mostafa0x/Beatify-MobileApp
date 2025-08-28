import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type sizeType = {
  w: number;
  h: number;
};

export default function CricelBtn({
  size = { w: 56, h: 56 },
  type = "play",
}: {
  size: sizeType;
  type: "play" | "pause";
}) {
  const { w, h } = size;
  const btns = {
    play: require("@/assets/images/playBtn.png"),
    pause: require("@/assets/images/pauseBtn.png"),
  };
  return (
    <TouchableOpacity>
      <Image
        style={{ width: rw(w), height: rh(h) }}
        source={btns[type]}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
