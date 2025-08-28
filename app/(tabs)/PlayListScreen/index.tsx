import AppBar from "@/components/AppBar";
import Ellipse from "@/components/Ellipse";
import FavouritesList from "@/components/FavouritesList";
import FooterInfo from "@/components/FooterInfo";
import LinearView from "@/components/LinearView";
import { rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function PlayListScreen() {
  return (
    <View>
      <Ellipse onLeft={false} x={0} y={0} type={1} />
      <ImageBackground
        style={styles.imgBack}
        source={{
          uri: "https://cdn-images.dzcdn.net/images/artist/638e69b9caaf9f9f3f8826febea7b543/1000x1000-000000-80-0-0.jpg",
        }}
      >
        <LinearView>
          <View style={styles.sectionTop}>
            <AppBar />
            <FooterInfo withLove />
          </View>
        </LinearView>
      </ImageBackground>
      <View style={styles.sectionBottom}>
        <FavouritesList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTop: {
    paddingVertical: rh(64),
    paddingHorizontal: rw(24),
  },
  imgBack: {
    width: rw(390),
    height: rh(343),
    overflow: "hidden",
    borderBottomStartRadius: rw(22),
    borderBottomEndRadius: rw(22),
  },

  sectionBottom: {
    paddingVertical: rh(32),
    paddingHorizontal: rw(24),
  },
});
