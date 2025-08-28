import { TrackType } from "@/types/PlayListType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import FavouritesItem from "./item";

function FavouritesList({
  data,
  isLoading,
}: {
  data: TrackType[] | undefined;
  isLoading: boolean;
}) {
  const renderItem = useCallback(
    ({ item }: { item: TrackType }) => {
      return <FavouritesItem item={item} isLoading={isLoading} />;
    },
    [isLoading]
  );

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={styles.list}>
      <FlashList
        numColumns={1}
        data={isLoading ? Array(3) : data ?? []}
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
    paddingRight: rw(15),
  },
});

export default memo(FavouritesList);
