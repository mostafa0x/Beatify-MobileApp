import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { usePlayerAudio } from "@/contexts/PlayerAudio";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import Slider from "@react-native-community/slider";
import { Image } from "expo-image";
import { usePathname, useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Portal } from "react-native-paper";
import { useSelector } from "react-redux";
import CricelBtn from "../Icons/CricelBtn";

function AudioPlayer() {
  const pathName = usePathname();
  const router = useRouter();

  const { currentTrack, onTrack, isLoadingSong } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );
  const { player, position, setPosition } = usePlayerAudio();
  return (
    !isLoadingSong &&
    currentTrack?.id !== onTrack?.id &&
    currentTrack && (
      <Portal>
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: "/Song" as any,
                  params: { id: currentTrack?.id },
                });
              }}
              style={styles.leftSide}
            >
              <Skeleton>
                <Image
                  style={styles.img}
                  source={{ uri: currentTrack?.album?.cover_small }}
                />
              </Skeleton>
              <View style={{ flexShrink: 1 }}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.5}
                  style={styles.songName}
                >
                  {currentTrack?.title}
                </Text>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.5}
                  style={styles.songMaker}
                >
                  {currentTrack?.artist?.name}
                </Text>
              </View>
            </TouchableOpacity>
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
              maximumValue={player?.currentStatus?.duration}
              value={position}
              minimumTrackTintColor={Colors.textPrimary}
              maximumTrackTintColor={Colors.textSec}
              thumbTintColor={Colors.textPrimary}
              onValueChange={(value) => {
                setPosition(value);
              }}
              onSlidingComplete={(value) => {
                player?.seekTo(value);
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
    width: rw(200),
  },
  songMaker: {
    fontFamily: Fonts.OpenSansRegular,
    fontSize: rf(14),
    color: Colors.textSec,
    width: rw(200),
  },
  slider: {
    width: "100%",
  },
});

export default memo(AudioPlayer);
