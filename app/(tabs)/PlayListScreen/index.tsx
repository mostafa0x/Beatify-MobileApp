import Ellipse from "@/components/Ellipse";
import FavouritesList from "@/components/FavouritesList";
import BackIcon from "@/components/Icons/BackIcon";
import CricelBtn from "@/components/Icons/CricelBtn";
import LoveIcon from "@/components/Icons/LoveIcon";
import MenuIcon from "@/components/Icons/MenuIcon";
import LinearView from "@/components/LinearView";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
            <View style={styles.appBar}>
              <BackIcon width={rw(32)} height={rh(32)} />
              <MenuIcon width={rw(32)} height={rh(32)} />
            </View>
            <View style={styles.footerInfo}>
              <View style={styles.leftSide}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.5}
                  style={styles.playListName}
                >
                  R&B Playlist
                </Text>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.5}
                  style={styles.playListPepole}
                >
                  Test
                </Text>
              </View>
              <View style={styles.rigthSide}>
                <LoveIcon />
                <CricelBtn />
              </View>
            </View>
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
  appBar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  footerInfo: {
    marginTop: rh(124),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftSide: {
    flexDirection: "column",
    gap: rh(8),
    flexShrink: 1,
  },
  rigthSide: {
    flexDirection: "row",
    gap: rw(16),
    alignItems: "center",
  },
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
  playListName: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.textPrimary,
    fontSize: rf(24),
    lineHeight: rh(32),
  },
  playListPepole: {
    fontFamily: Fonts.OpenSansSemiBold,
    color: Colors.textSec,
    fontSize: rf(16),
    lineHeight: rh(16),
  },
  sectionBottom: {
    paddingVertical: rh(32),
    paddingHorizontal: rw(24),
  },
});
