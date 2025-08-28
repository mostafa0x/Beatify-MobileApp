import AppBar from "@/components/AppBar";
import BarSong from "@/components/BarSong";
import Ellipse from "@/components/Ellipse";
import FooterInfo from "@/components/FooterInfo";
import PlaySongOptions from "@/components/PlaySongOptions";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SongScreen() {
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
            uri: "https://cdn-images.dzcdn.net/images/artist/638e69b9caaf9f9f3f8826febea7b543/1000x1000-000000-80-0-0.jpg",
          }}
        />
        <FooterInfo />
      </View>
      <View style={styles.barContainer}>
        <BarSong />
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
