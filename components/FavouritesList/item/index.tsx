import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { formatTime } from "@/services/formatTime";
import { TrackType } from "@/types/PlayListType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function FavouritesItem({
  item,
  isLoading,
}: {
  item: TrackType;
  isLoading: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (!isLoading) {
          router.push({ pathname: "/Song" as any, params: { id: item?.id } });
        }
      }}
      style={styles.container}
    >
      <View style={styles.infoBox}>
        <Skeleton show={isLoading}>
          <Image
            style={styles.img}
            source={{
              uri: item?.album.cover_small,
            }}
          />
        </Skeleton>
        <View
          style={[styles.titleContianer, isLoading && { marginTop: rh(15) }]}
        >
          <Skeleton show={isLoading}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
              style={styles.nameSong}
            >
              {item?.title}
            </Text>
          </Skeleton>
          {!isLoading && (
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
              style={styles.pepole}
            >
              {item?.artist?.name}
            </Text>
          )}
        </View>
      </View>
      {!isLoading && (
        <View>
          <Text style={styles.durn}>{formatTime(item?.duration ?? 0)}</Text>
        </View>
      )}
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
