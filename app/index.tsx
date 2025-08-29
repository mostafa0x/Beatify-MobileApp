import Ellipse from "@/components/Ellipse";
import FavouritesList from "@/components/FavouritesList";
import GenreList from "@/components/GenreList";
import PlayList from "@/components/PlayList";
import SearchbarFC from "@/components/SearchbarFC";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import usePlayListById from "@/hook/usePlayListById";
import { clearPlayList } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [serachValue, setSerachValue] = useState("");
  const { genreActive } = useSelector((state: StateType) => state.AppReducer);
  const { data, isLoading } = usePlayListById(genreActive);

  useEffect(() => {
    return () => {
      dispatch(clearPlayList());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Ellipse onLeft={true} x={0} y={30} type={1} />
      <View style={styles.headerContiner}>
        <Text style={styles.mainTxt}>Welcome back!</Text>
        <Text style={styles.secTxt}>What do you feel like today?</Text>
      </View>
      <View style={styles.serachContiner}>
        <SearchbarFC
          serachValue={serachValue}
          setSerachValue={setSerachValue}
        />
      </View>

      <View style={styles.genreList}>
        <GenreList />
      </View>
      <View style={styles.playList}>
        <PlayList data={data} isLoading={isLoading} />
      </View>
      <View style={styles.favouritesContiner}>
        <Text style={styles.textFavourite}>Your favourites</Text>
        <View style={styles.favouriteList}>
          <FavouritesList data={[]} isLoading={false} from="home" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: rh(64),
  },
  headerContiner: {
    paddingHorizontal: rw(24),
    gap: rh(8),
  },
  mainTxt: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.textPrimary,
    fontSize: rf(24),
  },
  secTxt: {
    fontFamily: Fonts.OpenSansSemiBold,
    color: Colors.textSec,
    fontSize: rf(14),
  },
  serachContiner: {
    marginTop: rh(24),
    paddingHorizontal: rw(24),
  },
  genreList: {
    marginTop: rh(40),
  },
  playList: {
    marginTop: rh(28),
  },
  favouritesContiner: {
    marginTop: rh(40),
    paddingHorizontal: rw(24),
  },
  favouriteList: {
    marginTop: rh(20),
  },
  textFavourite: {
    fontFamily: Fonts.OpenSansSemiBold,
    color: Colors.textPrimary,
    fontSize: rf(18),
  },
});
