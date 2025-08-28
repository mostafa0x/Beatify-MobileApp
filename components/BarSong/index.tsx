import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { formatTime } from "@/services/formatTime";
import { rf, rh } from "@/utils/dimensions";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BarSong({ duration }: { duration: number }) {
  const [position, setPosition] = useState(0);

  return (
    <View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor={Colors.textPrimary}
        maximumTrackTintColor={Colors.textSec}
        thumbTintColor={Colors.textPrimary}
        onValueChange={(value) => setPosition(value)}
        onSlidingComplete={(value) => {
          console.log("Seek to:", value);
        }}
      />

      <View style={styles.timeContianer}>
        <Text style={styles.txtTime}>{formatTime(Math.floor(position))}</Text>
        <Text style={styles.txtTime}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: rh(40),
  },
  timeContianer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: rh(9),
  },
  txtTime: {
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textPrimary,
    fontSize: rf(14),
  },
});
