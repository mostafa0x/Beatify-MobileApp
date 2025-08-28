import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function Ellipse({
  onLeft,
  x,
  y,
  type = 1,
}: {
  onLeft: boolean;
  x: number;
  y: number;
  type: 1 | 2 | 3 | 4;
}) {
  const imgs = {
    1: require("@/assets/images/Ellipse.png"),
    2: require("@/assets/images/Ellipse2.png"),
    3: require("@/assets/images/Ellipse3.png"),
    4: require("@/assets/images/Ellipse4.png"),
  };
  return (
    <View style={[styles.container, { left: rw(x), top: rh(y) }]}>
      <Image
        style={[styles.img, onLeft && styles.img_left]}
        source={imgs[type]}
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
