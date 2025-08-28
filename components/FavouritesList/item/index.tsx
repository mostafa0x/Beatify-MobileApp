import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { TrackType } from "@/types/PlayListType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function FavouritesItem({ item }: { item: TrackType }) {
  return (
    <TouchableOpacity
      onPress={() => router.push("/Song" as any)}
      style={styles.container}
    >
      <View style={styles.infoBox}>
        <Image
          style={styles.img}
          source={{
            uri: item?.album.cover_small,
          }}
        />
        <View style={styles.titleContianer}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
            style={styles.nameSong}
          >
            {item?.title}
          </Text>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
            style={styles.pepole}
          >
            {item?.artist?.name}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.durn}>0:22</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    gap: rw(16),
    flexDirection: "row",
  },
  img: {
    width: rw(56),
    height: rh(56),
    borderRadius: rw(8),
  },
  titleContianer: {
    gap: rh(4),
    flexShrink: 1,
  },
  nameSong: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(18),
    color: Colors.textPrimary,
    lineHeight: rh(24),
    width: rw(200),
  },
  pepole: {
    fontFamily: Fonts.OpenSansRegular,
    fontSize: rf(14),
    color: Colors.textSec,
    lineHeight: rh(16),
    width: rw(200),
  },
  durn: {
    fontFamily: Fonts.OpenSansRegular,
    fontSize: rf(14),
    color: Colors.textPrimary,
    lineHeight: rh(16),
  },
});

export default memo(FavouritesItem);
