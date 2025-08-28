import { handleBack } from "@/services/handleBack";
import { rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BackIcon from "../Icons/BackIcon";

function Appbar() {
  const router = useRouter();
  return (
    <View style={styles.appBar}>
      <TouchableOpacity onPress={() => handleBack(router)}>
        <BackIcon width={rw(32)} height={rh(32)} />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <MenuIcon width={rw(32)} height={rh(32)} />
      </TouchableOpacity> */}
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
