import AppBar from "@/components/AppBar";
import Ellipse from "@/components/Ellipse";
import FavouritesList from "@/components/FavouritesList";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import useSearch from "@/hook/useSearch";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SearchScreen() {
  const { q } = useLocalSearchParams();
  const word = Array.isArray(q) ? q[0] : q;
  const { data, isLoading, isError, refetch } = useSearch(word);
  return (
    <View style={styles.container}>
      <Ellipse onLeft={false} x={0} y={0} type={1} />
      <View style={styles.appBar}>
        <AppBar />
        <Text style={styles.title}>{word}</Text>
      </View>

      {isError ? (
        <View style={styles.emptyContiner}>
          <Text style={[styles.emptyTxt, isError && styles.emptyTxt_Error]}>
            {isError ? " An error occurred" : "Empty"}
          </Text>
          <TouchableOpacity
            style={styles.tryContaier}
            onPress={() => refetch()}
          >
            <Text style={styles.try}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.list}>
          <FavouritesList data={data} isLoading={isLoading} from={"serach"} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(20),
    paddingVertical: rh(44),
  },
  appBar: {
    flexDirection: "row",
    gap: rw(10),
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: rf(32),
    color: Colors.textPrimary,
  },
  list: {
    marginTop: rh(50),
  },
  emptyContiner: {
    marginTop: rh(180),
    alignItems: "center",
    justifyContent: "center",
    gap: rh(15),
  },
  emptyTxt: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(22),
    color: Colors.textPrimary,
  },
  emptyTxt_Error: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: rf(26),
    color: Colors.errorColor,
  },
  tryContaier: {
    borderWidth: rw(2),
    borderRadius: rw(25),
    borderColor: Colors.errorColor,
    padding: rw(5),
  },
  try: {
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textSec,
    fontSize: rf(14),
  },
});
