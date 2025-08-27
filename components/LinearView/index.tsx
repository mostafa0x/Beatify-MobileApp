import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

export default function LinearView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LinearGradient
      style={styles.liner}
      colors={["#000000", "rgba(0, 0, 0, 0)"]}
      locations={[0, 1]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  liner: { flex: 1 },
});
