import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

function SearchbarFC({ serachValue }: { serachValue: string }) {
  return (
    <Searchbar
      iconColor={Colors.iconColorPrimary}
      style={styles.searchbar}
      placeholder="Search song, playslist, artist..."
      placeholderTextColor={Colors.textSec}
      inputStyle={styles.searchbarInput}
      value={serachValue}
    />
  );
}

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: rw(8),
    backgroundColor: "#433E48",
    fontFamily: Fonts.OpenSansRegular,
    fontSize: rf(14),
    color: "red",
  },
  searchbarInput: {
    fontFamily: Fonts.OpenSansRegular,
    fontSize: rf(14),
    color: Colors.textSec,
  },
});

export default memo(SearchbarFC);
