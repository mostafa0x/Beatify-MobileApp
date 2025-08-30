import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { setGenreActive } from "@/lib/store/AppSlice";
import { genreType } from "@/types/genreType";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function GenreItem({ item }: { item: genreType }) {
  const { genreActive } = useSelector((state: StateType) => state.AppReducer);
  const dispatch = useDispatch();
  const isActive = genreActive == item?.id;

  return (
    <TouchableOpacity
      onPress={() => dispatch(setGenreActive(item?.id))}
      style={[styles.container, isActive && styles.container_Active]}
    >
      <Text style={[styles.label, isActive && styles.label_Active]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(58),
    height: rh(28),
    justifyContent: "center",
    alignItems: "center",
  },
  container_Active: {
    borderBottomWidth: rw(4),
    borderBottomColor: "#C22BB7",
    borderRadius: rw(5),
  },
  label: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(16),
    color: Colors.textSec,
    textAlign: "center",
    lineHeight: rh(26),
  },
  label_Active: {
    color: Colors.textPrimary,
  },
});

export default memo(GenreItem, (prev, next) => {
  return prev.item?.id === next.item?.id;
});
