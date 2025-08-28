import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BackIcon from "../Icons/BackIcon";
import MenuIcon from "../Icons/MenuIcon";

function Appbar() {
  return (
    <View style={styles.appBar}>
      <TouchableOpacity>
        <BackIcon width={rw(32)} height={rh(32)} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuIcon width={rw(32)} height={rh(32)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default memo(Appbar);
