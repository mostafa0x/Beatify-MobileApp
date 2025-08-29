import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { TrackType } from "@/types/PlayListType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import FavouritesItem from "./item";

function FavouritesList({
  data,
  isLoading,
  from,
}: {
  data: TrackType[] | undefined;
  isLoading: boolean;
  from: "home" | "serach";
}) {
  const renderItem = useCallback(
    ({ item }: { item: TrackType }) => {
      return <FavouritesItem item={item} isLoading={isLoading} from={from} />;
    },
    [isLoading]
  );
  const ListEmpty = useCallback(() => {
    return (
      <View>
        <Text style={styles.emptyTxt}>Empty</Text>
      </View>
    );
  }, []);

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={[styles.list, from == "serach" && styles.listSerach]}>
      <FlashList
        numColumns={1}
        data={isLoading ? Array(4) : data ?? []}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={56}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: "70%",
  },
  listSerach: {
    width: "100%",
    height: "100%",
  },
  itemSeparator: {
    height: rh(24),
  },
  contentContainer: {
    paddingBottom: rh(145),
    paddingRight: rw(15),
  },
  emptyTxt: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.textSec,
    fontSize: rf(22),
  },
});

export default memo(FavouritesList);
