import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function Ellipse({ onLeft, x, y }: { onLeft: boolean; x: number; y: number }) {
  return (
    <View style={[styles.container, { left: rw(x), top: rh(y) }]}>
      <Image
        style={[styles.img, onLeft && styles.img_left]}
        source={require("@/assets/images/Ellipse.png")}
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
