import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function CricelBtn() {
  return (
    <TouchableOpacity>
      <Image
        style={styles.img}
        source={require("@/assets/images/playBtn.png")}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: rw(56),
    height: rh(56),
  },
});
