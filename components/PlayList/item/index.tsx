import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PlayItem() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/(tabs)/PlayListScreen" as any)}
      style={styles.contianer}
    >
      <View style={styles.imgContiner}>
        <Image
          style={styles.img}
          source={{
            uri: "https://cdn-images.dzcdn.net/images/artist/638e69b9caaf9f9f3f8826febea7b543/1000x1000-000000-80-0-0.jpg",
          }}
        />
      </View>
      <View style={styles.textContianer}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          maxFontSizeMultiplier={0.7}
          style={styles.mainText}
        >
          R&B Playlist
        </Text>
        <Text style={styles.secText}>Chill your mind</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contianer: {},
  imgContiner: {
    width: rw(208),
    height: rh(202),
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: rw(18),
  },
  textContianer: {
    marginTop: rh(16),
    paddingLeft: rw(5),
    gap: rh(4),
    flexShrink: 1,
  },
  mainText: {
    fontFamily: Fonts.OpenSansSemiBold,
    color: Colors.textPrimary,
    fontSize: rf(18),
    width: rw(200),
  },
  secText: {
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textSec,
    fontSize: rf(14),
    width: rw(200),
  },
});

export default memo(PlayItem);
