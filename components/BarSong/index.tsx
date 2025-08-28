import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { usePlayerAudio } from "@/contexts/PlayerAudio";
import { formatTime } from "@/services/formatTime";
import { rf, rh } from "@/utils/dimensions";
import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BarSong({
  duration,
  isSame,
}: {
  duration: number;
  isSame: boolean;
}) {
  const { player, position, setPosition } = usePlayerAudio();

  return (
    <View>
      <Slider
        disabled={!isSame}
        style={styles.slider}
        minimumValue={0}
        maximumValue={28}
        value={isSame ? position : 0}
        minimumTrackTintColor={Colors.textPrimary}
        maximumTrackTintColor={Colors.textSec}
        thumbTintColor={Colors.textPrimary}
        onValueChange={(value) => isSame && setPosition(value)}
        onSlidingComplete={(value) => {
          if (isSame) {
            player?.seekTo(value);
          }
        }}
      />

      <View style={styles.timeContianer}>
        <Text style={styles.txtTime}>
          {isSame
            ? "00:" + Math.floor(position).toString().padStart(2, "0")
            : "00:00"}
        </Text>
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
