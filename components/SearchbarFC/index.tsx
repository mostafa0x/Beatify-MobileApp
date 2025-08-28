import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { handleSerach } from "@/services/handleSerach";
import { rf, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

function SearchbarFC({
  serachValue,
  setSerachValue,
}: {
  serachValue: string;
  setSerachValue: any;
}) {
  const router = useRouter();
  return (
    <Searchbar
      onIconPress={() => handleSerach(serachValue, router)}
      onSubmitEditing={() => handleSerach(serachValue, router)}
      iconColor={Colors.iconColorPrimary}
      style={styles.searchbar}
      placeholder="Search song, playslist, artist..."
      placeholderTextColor={Colors.textSec}
      inputStyle={styles.searchbarInput}
      value={serachValue}
      onChangeText={setSerachValue}
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
    color: Colors.textPrimary,
  },
});

export default memo(SearchbarFC);
