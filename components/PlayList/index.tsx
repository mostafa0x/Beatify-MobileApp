import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { PlayListType } from "@/types/PlayListType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayItem from "./item";
function PlayList({
  data,
  isLoading,
  isError,
}: {
  data: PlayListType[];
  isLoading: boolean;
  isError: boolean;
}) {
  const listRef = useRef<FlashList<PlayListType>>(null);

  const renderItem = useCallback(
    ({ item }: { item: PlayListType }) => {
      return <PlayItem item={item} isLoading={isLoading} />;
    },
    [isLoading]
  );

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  const ListEmpty = useCallback(() => {
    return (
      <View style={styles.emptyContiner}>
        <Text style={[styles.emptyTxt, isError && styles.emptyTxt_Error]}>
          {isError ? " An error occurred" : "Empty"}
        </Text>
      </View>
    );
  }, [isError]);

  useEffect(() => {
    if (listRef.current && data) {
      listRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  }, [data]);

  return (
    <View style={styles.list}>
      <FlashList
        horizontal
        ref={listRef}
        data={data}
        keyExtractor={(item, index) => String(item?.id ?? index)}
        estimatedItemSize={208}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
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
    height: "auto",
  },

  itemSeparator: {
    width: rw(20),
  },
  contentContainer: {
    paddingHorizontal: rw(24),
  },
  emptyContiner: {
    marginTop: rh(20),
  },
  emptyTxt: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(22),
    color: Colors.textSec,
  },
  emptyTxt_Error: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: rf(22),
    color: Colors.errorColor,
  },
});

export default memo(PlayList, (prev, next) => {
  return prev.isError === next.isError && prev.isLoading === next.isLoading;
});
