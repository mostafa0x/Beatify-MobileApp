import { useAppDispatch } from "@/hook/useAppDispatch";
import { getInStrogefavourites } from "@/lib/store/AppSlice";
import { StateType } from "@/types/store/StateType";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function AppRouteProvdier({ children }: { children: any }) {
  const dispatch = useAppDispatch();
  const { isLoadingFromStorage, favouritesList } = useSelector(
    (state: StateType) => state.AppReducer
  );

  useEffect(() => {
    dispatch(getInStrogefavourites());

    return () => {};
  }, []);

  useEffect(() => {
    if (!isLoadingFromStorage) SplashScreen.hide();

    return () => {};
  }, [isLoadingFromStorage]);

  return children;
}
