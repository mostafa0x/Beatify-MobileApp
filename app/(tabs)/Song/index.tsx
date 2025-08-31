import AppBar from "@/components/AppBar";
import BarSong from "@/components/BarSong";
import Ellipse from "@/components/Ellipse";
import FooterInfo from "@/components/FooterInfo";
import PlaySongOptions from "@/components/PlaySongOptions";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import useSong from "@/hook/useSong";
import {
  setCurrentTrackPreview,
  setIsLoadingSong,
  setOnTrack,
  setPlay,
} from "@/lib/store/AudioPlayerSlice";
import handleIsSongLoved from "@/services/handleIsSongLoved";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function SongScreen() {
  const dipatch = useDispatch();
  const { id, type } = useLocalSearchParams();
  const playType = Array.isArray(type) ? parseInt(type[0]) : parseInt(type);
  const songId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const { data, isLoading, isError, refetch } = useSong(songId);
  const [isLoved, setIsLoved] = useState(false);
  const { currentTrack, onTrack } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );
  const { favouritesList } = useSelector(
    (state: StateType) => state.AppReducer
  );
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  useEffect(() => {
    if (data) {
      dipatch(setOnTrack(data));
      setIsLoved(handleIsSongLoved(favouritesList, data.id));
      dipatch(setCurrentTrackPreview(data.preview));
      data?.id !== currentTrack?.id &&
        dipatch(
          setPlay({
            id: data?.id ?? 0,
            type: playType == 1 ? 9 : 0,
            data: favouritesList,
          })
        );
    }
    return () => {
      dipatch(setOnTrack(null));
      dipatch(setIsLoadingSong(false));
      setIsLoved(false);
    };
  }, [data, isLoading, favouritesList]);

  return (
    <View style={styles.container}>
      <Ellipse onLeft={true} x={0} y={0} type={3} />
      <Ellipse onLeft={true} x={0} y={0} type={4} />
      <View style={styles.appBar}>
        <AppBar />
      </View>
      {isError ? (
        <View style={styles.emptyContiner}>
          <Text style={[styles.emptyTxt, isError && styles.emptyTxt_Error]}>
            {isError ? " An error occurred" : "Empty"}
          </Text>
          <TouchableOpacity
            style={styles.tryContaier}
            onPress={() => refetch()}
          >
            <Text style={styles.try}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View>
            <Skeleton show={isLoadingImg && isLoading}>
              <Image
                style={styles.img}
                source={{
                  uri: data?.album?.cover_big,
                }}
                onLoadStart={() => setIsLoadingImg(true)}
                onLoadEnd={() => setIsLoadingImg(false)}
              />
            </Skeleton>
            <View style={isLoading && styles.loadingContant}>
              <FooterInfo
                title={data?.title ?? "unknow"}
                description={data?.artist.name ?? "unknow"}
                song={data}
                isLoved={isLoved}
                withLove={true}
                btnShow={false}
              />
              <View style={styles.barContainer}>
                <BarSong
                  duration={data?.duration ?? 0}
                  isSame={data?.id == currentTrack?.id}
                />
              </View>
              <View style={styles.playOptions}>
                <PlaySongOptions playType={playType} />
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(20),
    paddingHorizontal: rw(24),
  },
  appBar: {
    marginBottom: rh(45),
  },
  img: {
    width: rw(342),
    height: rh(333),
    borderRadius: rw(16),
  },
  barContainer: {
    marginTop: rh(30),
  },
  playOptions: {
    marginTop: rh(20),
  },
  loadingContant: {
    opacity: 0,
  },
  emptyContiner: {
    marginTop: rh(180),
    alignItems: "center",
    justifyContent: "center",
    gap: rh(15),
  },
  emptyTxt: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(22),
    color: Colors.textPrimary,
  },
  emptyTxt_Error: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: rf(26),
    color: Colors.errorColor,
  },
  tryContaier: {
    borderWidth: rw(2),
    borderRadius: rw(25),
    borderColor: Colors.errorColor,
    padding: rw(5),
  },
  try: {
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textSec,
    fontSize: rf(14),
  },
});
