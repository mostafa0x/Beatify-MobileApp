import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
Image;
function Logo({ size }: { size?: { w: number; h: number } }) {
  return (
    <Image
      style={[styles.img, size && { width: rw(size.w), height: rh(size.h) }]}
      source={require("@/assets/images/icon.png")}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    width: rw(64),
    height: rh(64),
  },
});

export default memo(Logo);
