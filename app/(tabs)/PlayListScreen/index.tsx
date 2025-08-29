import AppBar from "@/components/AppBar";
import Ellipse from "@/components/Ellipse";
import FavouritesList from "@/components/FavouritesList";
import FooterInfo from "@/components/FooterInfo";
import LinearView from "@/components/LinearView";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import usePlayListItem from "@/hook/usePlayListItem";
import { setTracks } from "@/lib/store/AudioPlayerSlice";
import { PlayListItemType } from "@/types/PlayListType";
import { rf, rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

interface hookType {
  data: PlayListItemType;
}

export default function PlayListScreen() {
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();
  const playListId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const { data, isLoading, isError, refetch } = usePlayListItem(playListId);

  useEffect(() => {
    if (data) {
      dispatch(setTracks({ id: playListId, data: data.tracks.data }));
    }

    return () => {};
  }, [data]);

  return (
    <View>
      <Ellipse onLeft={false} x={0} y={0} type={1} />
      {isError ? (
        <>
          <View style={{ marginTop: rh(100), paddingHorizontal: rw(24) }}>
            <AppBar />
          </View>
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
        </>
      ) : (
        <>
          <Skeleton show={isLoading} radius={rw(22)}>
            <ImageBackground
              style={styles.imgBack}
              contentFit="fill"
              source={{
                uri: data?.picture_big,
              }}
            >
              <LinearView>
                <View style={styles.sectionTop}>
                  <AppBar />
                  <View style={styles.footer}>
                    <FooterInfo
                      title={data?.title ?? "unknow"}
                      description={data?.description ?? "unknow"}
                      withLove={false}
                      song={undefined}
                      isLoved={false}
                      btnShow
                    />
                  </View>
                </View>
              </LinearView>
            </ImageBackground>
          </Skeleton>
          <View style={styles.sectionBottom}>
            <FavouritesList
              data={data?.tracks.data}
              isLoading={isLoading}
              from="playlist"
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTop: {
    paddingVertical: rh(64),
    paddingHorizontal: rw(24),
  },
  imgBack: {
    width: rw(390),
    height: rh(343),
    overflow: "hidden",
    borderBottomStartRadius: rw(22),
    borderBottomEndRadius: rw(22),
  },

  sectionBottom: {
    paddingVertical: rh(32),
    paddingHorizontal: rw(24),
  },
  footer: {
    marginTop: rh(124),
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
