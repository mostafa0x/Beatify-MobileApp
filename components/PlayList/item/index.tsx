import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { PlayListType } from "@/types/PlayListType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PlayItem({
  item,
  isLoading,
}: {
  item: PlayListType;
  isLoading: boolean;
}) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isLoading) {
          router.push({
            pathname: "/(tabs)/PlayListScreen" as any,
            params: { id: item?.id },
          });
        }
      }}
      style={styles.contianer}
    >
      <View style={styles.imgContiner}>
        <Skeleton show={isLoading} radius={styles.img.borderRadius}>
          <Image
            style={styles.img}
            source={{
              uri: item?.picture_big,
            }}
            cachePolicy={"memory-disk"}
          />
        </Skeleton>
      </View>

      <View style={styles.textContianer}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          maxFontSizeMultiplier={0.7}
          style={styles.mainText}
        >
          {item?.title}
        </Text>
        <Text style={styles.secText}>{item?.user?.name}</Text>
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
