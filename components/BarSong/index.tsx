import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { formatTime } from "@/services/formatTime";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function BarSong({ duration }: { duration: number }) {
  return (
    <View style={styles.continer}>
      <View style={styles.barContianer}>
        <View style={styles.backBar}></View>
        <View style={[styles.topBar, { width: rw(100) }]}></View>
      </View>
      <View style={styles.timeContianer}>
        <Text style={styles.txtTime}>0:2</Text>
        <Text style={styles.txtTime}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {},
  barContianer: {
    flexDirection: "row",
  },
  backBar: {
    backgroundColor: Colors.textSec,
    width: rw(342),
    height: rh(4),
    borderRadius: rw(8),
  },
  topBar: {
    position: "absolute",
    backgroundColor: Colors.textPrimary,
    height: rh(4),
    borderRadius: rw(8),
    left: rw(0),
    top: rh(0),
    zIndex: 1,
  },
  timeContianer: {
    paddingTop: rh(9),
    justifyContent: "space-between",
    flexDirection: "row",
  },

  txtTime: {
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textPrimary,
    fontSize: rf(14),
    lineHeight: rh(16),
  },
});

export default memo(BarSong);
