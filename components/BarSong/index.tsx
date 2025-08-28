import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { setPosition } from "@/lib/store/AudioPlayerSlice";
import { formatTime } from "@/services/formatTime";
import { StateType } from "@/types/store/StateType";
import { rf, rh } from "@/utils/dimensions";
import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function BarSong({ duration }: { duration: number }) {
  const dispatch = useDispatch();
  const { position } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );

  return (
    <View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={30}
        value={position}
        minimumTrackTintColor={Colors.textPrimary}
        maximumTrackTintColor={Colors.textSec}
        thumbTintColor={Colors.textPrimary}
        onValueChange={(value) => dispatch(setPosition(value))}
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
