import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function Ellipse({
  onLeft,
  x,
  y,
  type = 0,
}: {
  onLeft: boolean;
  x: number;
  y: number;
  type: number;
}) {
  const imgs = {
    0: require("@/assets/images/Ellipse.png"),
    1: require("@/assets/images/Ellipse2.png"),
  };
  return (
    <View style={[styles.container, { left: rw(x), top: rh(y) }]}>
      <Image
        style={[styles.img, onLeft && styles.img_left]}
        source={type == 0 ? imgs[0] : imgs[1]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  img: {
    width: rw(390),
    height: rh(844),
    transform: [{ scaleX: -1 }],
  },
  img_left: {
    width: rw(390),
    height: rh(844),
    transform: [{ scaleX: 1 }],
  },
});

export default memo(Ellipse);
