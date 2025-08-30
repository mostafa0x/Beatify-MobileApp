import AudioPlayer from "@/components/AudioPlayer";
import PlayerAudioProvider from "@/contexts/PlayerAudio";
import React from "react";
import { Provider } from "react-native-paper";
import AppRouteProvdier from "./AppRoute";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <AppRouteProvdier>
        <ReactQueryProvider>
          <PlayerAudioProvider>
            {children}

            <AudioPlayer />
          </PlayerAudioProvider>
        </ReactQueryProvider>
      </AppRouteProvdier>
    </Provider>
  );
}
