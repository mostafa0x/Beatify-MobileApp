import { rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import PlayItem from "./item";
export default function PlayList() {
  const renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return <PlayItem />;
    },
    []
  );

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={styles.list}>
      <FlashList
        horizontal
        data={["Recent", "Top 50", "Chill", "R&B", "Festival", 6]}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={208}
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
