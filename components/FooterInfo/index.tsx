import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { pushToFavouritesList } from "@/lib/store/AppSlice";
import { SongType } from "@/types/SongType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import LoveIcon from "../Icons/LoveIcon";
import PlayListBtn from "../Icons/PlayListBtn";

function FooterInfo({
  withLove,
  title,
  description,
  song,
}: {
  withLove?: boolean;
  title: string;
  description: string;
  song: SongType | undefined;
}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.footerInfo}>
      <View style={styles.leftSide}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.5}
          style={styles.playListName}
        >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.5}
          style={styles.playListPepole}
        >
          {description}
        </Text>
      </View>
      <View style={styles.rigthSide}>
        <TouchableOpacity onPress={() => dispatch(pushToFavouritesList(song))}>
          <LoveIcon isLove={false} />
        </TouchableOpacity>
        {withLove && <PlayListBtn size={{ w: 56, h: 56 }} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    lineHeight: rh(22),
  },
  footerInfo: {
    marginTop: rh(39),
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
});

export default memo(FooterInfo);
