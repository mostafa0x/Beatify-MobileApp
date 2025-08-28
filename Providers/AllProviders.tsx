import AudioPlayer from "@/components/AudioPlayer";
import React from "react";
import { Provider } from "react-native-paper";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <ReactQueryProvider>
        {children}
        <AudioPlayer />
      </ReactQueryProvider>
    </Provider>
  );
}
