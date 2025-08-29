import { genreType } from "@/types/genreType";
import { StateType } from "@/types/store/StateType";
import { rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import GenreItem from "./item";

export default function GenreList() {
  const { genreList } = useSelector((state: StateType) => state.AppReducer);
  const renderItem = useCallback(({ item }: { item: genreType }) => {
    return <GenreItem item={item} />;
  }, []);

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={styles.list}>
      <FlashList
        horizontal
        data={genreList}
        keyExtractor={(item, index) => item.id.toString()}
        estimatedItemSize={58}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: "auto",
  },
  itemSeparator: {
    width: rw(20),
  },
  contentContainer: {
    paddingHorizontal: rw(24),
  },
});
