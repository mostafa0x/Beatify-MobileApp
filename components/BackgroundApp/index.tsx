import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LinearView from "../LinearView";

export default function BackgroundApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = true;
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
        <LinearView>{children}</LinearView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  backImg: { flex: 1, zIndex: -1 },
  liner: { flex: 1 },
});
