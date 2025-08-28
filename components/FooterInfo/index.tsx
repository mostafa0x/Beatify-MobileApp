import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import CricelBtn from "../Icons/CricelBtn";
import LoveIcon from "../Icons/LoveIcon";

function FooterInfo({
  withLove,
  title,
  description,
}: {
  withLove?: boolean;
  title: string;
  description: string;
}) {
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
        <LoveIcon />
        {withLove && <CricelBtn size={{ w: 56, h: 56 }} type="play" />}
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
    lineHeight: rh(16),
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
