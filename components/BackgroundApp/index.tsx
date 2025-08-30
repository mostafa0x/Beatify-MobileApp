import { Colors } from "@/constants/Colors";
import { usePathname } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import LinearView from "../LinearView";

export default function BackgroundApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMount = useRef(false);
  const pathName = usePathname();
  const [face, setFace] = useState(false);

  useEffect(() => {
    isMount.current = true;
    return () => {};
  }, []);

  useEffect(() => {
    if (isMount.current == false) return;
    pathName == "/Landing" ? setFace(true) : setFace(false);

    return () => {};
  }, [isMount.current, pathName]);

  return (
    <>
      {face ? (
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
