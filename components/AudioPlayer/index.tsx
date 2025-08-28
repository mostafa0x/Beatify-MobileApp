import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { setIsPlayingPlayer, setPosition } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import Slider from "@react-native-community/slider";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { Image } from "expo-image";
import { usePathname } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Portal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import CricelBtn from "../Icons/CricelBtn";

function AudioPlayer() {
  const dispatch = useDispatch();
  const pathName = usePathname();

  const { tracks, currentTrack, cureentIndex, isPlayingPlayer, position } =
    useSelector((state: StateType) => state.AudioPlayerReducer);
  const player = useAudioPlayer({ uri: currentTrack?.preview });
  const status = useAudioPlayerStatus(player);

  useEffect(() => {
    if (isPlayingPlayer) {
      player.play();
    } else {
      player.pause();
    }
    // console.log(player.currentStatus);

    dispatch(setPosition(player.currentTime));

    return () => {};
  }, [isPlayingPlayer, player]);

  useEffect(() => {
    dispatch(setPosition(player.currentTime));
    if (player.currentStatus.didJustFinish)
      if (tracks.length < 0) {
        dispatch(setIsPlayingPlayer());
      } else {
        dispatch(setIsPlayingPlayer());
      }

    return () => {};
  }, [status]);

  return (
    pathName !== "/Song" && (
      <Portal>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.leftSide}>
              <Skeleton>
                <Image
                  style={styles.img}
                  source={{ uri: currentTrack?.album?.cover_small }}
                />
              </Skeleton>
              <View>
                <Text style={styles.songName}>{currentTrack?.title}</Text>
                <Text style={styles.songMaker}>
                  {currentTrack?.artist?.name}
                </Text>
              </View>
            </View>
            <View style={styles.rigthSide}>
              <CricelBtn
                size={{
                  w: 56,
                  h: 56,
                }}
              />
            </View>
          </View>
          <View style={styles.bot}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={player.currentStatus.duration}
              value={position}
              minimumTrackTintColor={Colors.textPrimary}
              maximumTrackTintColor={Colors.textSec}
              thumbTintColor={Colors.textPrimary}
              onValueChange={(value) => {
                setPosition(value);
                //   player.seekTo(value);
              }}
              onSlidingComplete={(value) => {
                player.seekTo(value);
                console.log("Seek to:", value);
              }}
            />
          </View>
        </View>
      </Portal>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingHorizontal: rw(24),
    paddingTop: rh(5),
    bottom: rh(37),
    width: rw(390),
    height: rh(100),
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bot: { paddingTop: rh(10) },
  img: {
    width: rw(56),
    height: rh(56),
    borderRadius: rw(22),
  },
  leftSide: {
    flexDirection: "row",
    gap: rw(10),
  },
  rigthSide: {
    flexDirection: "row",
  },
  songName: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(16),
    color: Colors.textPrimary,
  },
  songMaker: {
    fontFamily: Fonts.OpenSansRegular,
    fontSize: rf(14),
    color: Colors.textSec,
  },
  slider: {
    width: "100%",
  },
});

export default memo(AudioPlayer);
