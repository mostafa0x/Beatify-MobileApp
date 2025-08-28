import AppBar from "@/components/AppBar";
import BarSong from "@/components/BarSong";
import Ellipse from "@/components/Ellipse";
import FooterInfo from "@/components/FooterInfo";
import PlaySongOptions from "@/components/PlaySongOptions";
import useSong from "@/hook/useSong";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SongScreen() {
  const { id } = useLocalSearchParams();
  const songId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const { data } = useSong(songId);

  return (
    <View style={styles.container}>
      <Ellipse onLeft={true} x={0} y={0} type={3} />
      <Ellipse onLeft={true} x={0} y={0} type={4} />
      <View style={styles.appBar}>
        <AppBar />
      </View>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: data?.album?.cover_big,
          }}
        />
        <FooterInfo
          title={data?.title ?? "unknow"}
          description={data?.artist.name ?? "unknow"}
        />
      </View>
      <View style={styles.barContainer}>
        <BarSong duration={data?.duration ?? 0} />
      </View>
      <View style={styles.playOptions}>
        <PlaySongOptions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(65),
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
    marginTop: rh(40),
  },
  playOptions: {
    marginTop: rh(59),
  },
});
