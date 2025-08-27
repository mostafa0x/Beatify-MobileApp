import { Colors } from "@/constants/Colors";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import LinearView from "../LinearView";

export default function BackgroundApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = false;
  return (
    <>
      {x ? (
        <ImageBackground
          source={require("@/assets/images/splashBg.png")}
          style={styles.backImg}
          resizeMode="cover"
        >
          <LinearView>{children}</LinearView>
        </ImageBackground>
      ) : (
        <View style={styles.withoutImg}>{children}</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  backImg: { flex: 1, zIndex: -1 },
  withoutImg: { flex: 1, backgroundColor: Colors.appBg },
});
