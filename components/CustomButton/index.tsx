import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({ lable }: { lable: string }) {
  return (
    <TouchableOpacity>
      <LinearGradient
        style={styles.btnContaier}
        colors={["#842ED8", "#DB28A9", "#9D1DCA"]}
        locations={[0.31, 0.59, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.btnLabel}>{lable}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContaier: {
    width: rw(203),
    height: rh(48),
    borderRadius: rw(32),
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(16),
    color: Colors.textPrimary,
    lineHeight: rh(16),
  },
});

export default memo(CustomButton);
