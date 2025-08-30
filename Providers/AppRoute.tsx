import { useAppDispatch } from "@/hook/useAppDispatch";
import { getInStrogefavourites } from "@/lib/store/AppSlice";
import { StateType } from "@/types/store/StateType";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
SplashScreen.preventAutoHideAsync();

export default function AppRouteProvdier({ children }: { children: any }) {
  const [isMounted, setIsMounted] = useState(false);
  const disptach = useAppDispatch();
  const { isLoadingFromStorage } = useSelector(
    (state: StateType) => state.AppReducer
  );

  useEffect(() => {
    if (isMounted) return;
    setIsMounted(true);
    disptach(getInStrogefavourites());
    return () => {};
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    !isLoadingFromStorage && SplashScreen.hide();
    return () => {};
  }, [isLoadingFromStorage, isMounted]);

  return children;
}
