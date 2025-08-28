import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import CricelBtn from "../Icons/CricelBtn";
import SkipBackIcon from "../Icons/SkipBackIcon";
import SkipforwardICon from "../Icons/SkipforwardICon";

export default function PlaySongOptions() {
  return (
    <View style={styles.container}>
      <SkipBackIcon />
      <CricelBtn />
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
