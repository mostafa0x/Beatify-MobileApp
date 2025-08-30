import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { TrackType } from "@/types/PlayListType";
import { SongType } from "@/types/SongType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import FavouritesItem from "./item";

function FavouritesList({
  data,
  isLoading,
  from,
}: {
  data: (SongType[] | TrackType[]) | undefined;
  isLoading: boolean;
  from: "home" | "serach" | "playlist";
}) {
  useEffect(() => {
    listRef && listRef.current?.scrollToIndex({ index: 0, animated: false });

    return () => {};
  }, [data]);

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

  const listRef = useRef<FlashList<TrackType>>(null);
  return (
    <View
      style={[
        styles.list,
        from == "serach" && styles.listSerach,
        from == "playlist" && styles.list_PlayList,
      ]}
    >
      <FlashList
        ref={listRef}
        numColumns={1}
        data={isLoading ? Array(4) : data ?? []}
        keyExtractor={(item, index) => String(item?.id ?? index)}
        estimatedItemSize={56}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={
          from == "home"
            ? styles.contentContainer
            : styles.contentContainer_Playlist
        }
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: "60%",
  },
  list_PlayList: {
    width: "100%",
    height: "80%",
  },
  listSerach: {
    width: "100%",
    height: "100%",
  },
  itemSeparator: {
    height: rh(24),
  },
  contentContainer: {
    paddingTop: rh(20),
    paddingBottom: rh(110),
    paddingRight: rw(15),
  },
  contentContainer_Playlist: {
    paddingBottom: rh(250),
    paddingRight: rw(15),
  },
  emptyTxt: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.textSec,
    fontSize: rf(22),
  },
});

export default memo(FavouritesList, (prev, next) => {
  return prev.isLoading === next.isLoading && prev.from === next.from;
});
