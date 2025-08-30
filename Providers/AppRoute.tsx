import { useAppDispatch } from "@/hook/useAppDispatch";
import { getInStrogefavourites } from "@/lib/store/AppSlice";
import { getNewUser } from "@/services/Storage";
import { StateType } from "@/types/store/StateType";
import { SplashScreen, useRouter } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function AppRouteProvdier({ children }: { children: any }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoadingFromStorage, favouritesList } = useSelector(
    (state: StateType) => state.AppReducer
  );

  useEffect(() => {
    dispatch(getInStrogefavourites());

    return () => {};
  }, []);

  useEffect(() => {
    let travelScreen: number | undefined = undefined;
    const checkUser = async () => {
      const value = await getNewUser();
      value ? router.replace("/Landing") : null;
      const time = value ? 250 : 10;
      travelScreen = setTimeout(() => {
        SplashScreen.hide();
      }, time);
    };

    if (!isLoadingFromStorage) {
      checkUser();
    }

    return () => {
      clearTimeout(travelScreen);
    };
  }, [isLoadingFromStorage]);

  return children;
}
