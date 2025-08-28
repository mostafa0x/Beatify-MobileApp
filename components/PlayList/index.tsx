import { PlayListType } from "@/types/PlayListType";
import { rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import PlayItem from "./item";
export default function PlayList({
  data,
  isLoading,
}: {
  data: PlayListType[];
  isLoading: boolean;
}) {
  const listRef = useRef<FlashList<PlayListType>>(null);

  const renderItem = useCallback(
    ({ item, index }: { item: PlayListType; index: number }) => {
      return <PlayItem item={item} isLoading={isLoading} />;
    },
    [isLoading]
  );

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  useEffect(() => {
    if (listRef.current && data) {
      listRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  }, [data]);

  return (
    <View style={styles.list}>
      <FlashList
        ref={listRef}
        horizontal
        data={isLoading ? Array(2) : data}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index.toString()
        }
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
