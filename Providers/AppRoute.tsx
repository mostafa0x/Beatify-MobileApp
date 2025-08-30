import { useAppDispatch } from "@/hook/useAppDispatch";
import { getInStrogefavourites } from "@/lib/store/AppSlice";
import { StateType } from "@/types/store/StateType";
import { SplashScreen } from "expo-router";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function AppRouteProvdier({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMounted = useRef(false);
  const disptach = useAppDispatch();
  const { isLoadingFromStorage } = useSelector(
    (state: StateType) => state.AppReducer
  );

  useEffect(() => {
    isMounted.current = true;
    return () => {};
  }, []);

  useEffect(() => {
    if (isMounted.current == true) {
      disptach(getInStrogefavourites());
    }
    if (!isLoadingFromStorage) {
      SplashScreen.hide();
    }

    return () => {};
  }, [isMounted.current, isLoadingFromStorage]);

  return children;
}
