import AppBar from "@/components/AppBar";
import Ellipse from "@/components/Ellipse";
import FavouritesList from "@/components/FavouritesList";
import FooterInfo from "@/components/FooterInfo";
import LinearView from "@/components/LinearView";
import usePlayListItem from "@/hook/usePlayListItem";
import { PlayListItemType } from "@/types/PlayListType";
import { rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, View } from "react-native";

interface hookType {
  data: PlayListItemType;
}

export default function PlayListScreen() {
  const { id } = useLocalSearchParams();
  const playListId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const { data, isLoading } = usePlayListItem(playListId);
  return (
    <View>
      <Ellipse onLeft={false} x={0} y={0} type={1} />
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
                  withLove
                />
              </View>
            </View>
          </LinearView>
        </ImageBackground>
      </Skeleton>
      <View style={styles.sectionBottom}>
        <FavouritesList data={data?.tracks.data} isLoading={isLoading} />
      </View>
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
});
