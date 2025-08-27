import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import FavouritesItem from "./item";

function FavouritesList() {
  const renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return <FavouritesItem item={item} />;
    },
    []
  );

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={styles.list}>
      <FlashList
        numColumns={1}
        data={["Recent", "Top 50", "Chill", "R&B", "Festival", 6]}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={56}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: "70%",
  },
  itemSeparator: {
    height: rh(24),
  },
  contentContainer: {
    paddingBottom: rh(145),
  },
});

export default memo(FavouritesList);
