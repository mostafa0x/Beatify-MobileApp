import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import SkipBackIcon from "../Icons/SkipBackIcon";
import SkipforwardICon from "../Icons/SkipforwardICon";
import SongPlayBtn from "../Icons/SongPlayBtn";

export default function PlaySongOptions() {
  return (
    <View style={styles.container}>
      <SkipBackIcon />
      <SongPlayBtn size={{ w: 64, h: 64 }} />
      <SkipforwardICon />
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
