import AppBar from "@/components/AppBar";
import BarSong from "@/components/BarSong";
import Ellipse from "@/components/Ellipse";
import FooterInfo from "@/components/FooterInfo";
import PlaySongOptions from "@/components/PlaySongOptions";
import useSong from "@/hook/useSong";
import { setIsLoadingSong, setOnTrack } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function SongScreen() {
  const dipatch = useDispatch();
  const { id } = useLocalSearchParams();
  const songId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const { data, isLoading } = useSong(songId);
  const { currentTrack, cureentIndex } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );

  useEffect(() => {
    data && dipatch(setOnTrack(data));
    dipatch(setIsLoadingSong(isLoading));
    return () => {
      dipatch(setOnTrack(null));
    };
  }, [data, isLoading]);

  return (
    <View style={styles.container}>
      <Ellipse onLeft={true} x={0} y={0} type={3} />
      <Ellipse onLeft={true} x={0} y={0} type={4} />
      <View style={styles.appBar}>
        <AppBar />
      </View>
      <View>
        <Skeleton show={isLoading}>
          <Image
            style={styles.img}
            source={{
              uri: data?.album?.cover_big,
            }}
          />
        </Skeleton>
        <FooterInfo
          title={data?.title ?? "unknow"}
          description={data?.artist.name ?? "unknow"}
        />
      </View>
      <View style={styles.barContainer}>
        <BarSong
          duration={data?.duration ?? 0}
          isSame={data?.id == currentTrack?.id}
        />
      </View>
      <View style={styles.playOptions}>
        <PlaySongOptions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(30),
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
});
