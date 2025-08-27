import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function GenreItem({ item }: { item: any }) {
  return (
    <View style={styles.continaer}>
      <Text style={[styles.label, item == "Recent" && styles.label_Active]}>
        {item}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continaer: {
    width: rw(58),
    height: rh(28),
  },
  label: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(16),
    color: Colors.textSec,
    textAlign: "center",
    lineHeight: rh(26),
  },
  label_Active: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(16),
    color: Colors.textPrimary,
    lineHeight: rh(24),
    borderBottomWidth: rw(4),
    textAlign: "center",
    borderBottomColor: "#C22BB7",
    paddingBottom: rh(4),
    borderRadius: rw(5),
  },
});

export default memo(GenreItem);
