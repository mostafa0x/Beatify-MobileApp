import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contantContainer}>
        <View style={styles.textsContiner}>
          <Text style={styles.mainTxt}>Feel the beat</Text>
          <Text numberOfLines={2} style={styles.secTxt}>
            Emmerse yourself into the world of music today
          </Text>
        </View>
        <View style={styles.btnContiner}>
          <CustomButton lable="Continue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(388),
  },
  contantContainer: {
    alignItems: "center",
  },
  textsContiner: {
    gap: rh(16),
    alignItems: "center",
  },
  mainTxt: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: rf(24),
    color: Colors.textPrimary,
  },
  secTxt: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(14),
    color: Colors.textSec,
    width: rw(200),
    textAlign: "center",
  },
  btnContiner: {
    marginTop: rh(40),
  },
});
