import Ellipse from "@/components/Ellipse";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PlayListScreen() {
  return (
    <View>
      <Ellipse onLeft={false} x={0} y={0} type={1} />
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
