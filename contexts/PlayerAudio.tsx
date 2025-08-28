import { setIsPlayingPlayer } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import {
  AudioPlayer,
  AudioStatus,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import { usePathname } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PlayerAudioType {
  player: AudioPlayer | undefined;
  status: AudioStatus | undefined;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

const PlayerAudio = createContext<PlayerAudioType>({
  player: undefined,
  status: undefined,
  position: 0,
  setPosition: () => {},
});

export const usePlayerAudio = () => useContext(PlayerAudio);

export default function PlayerAudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const pathName = usePathname();

  const { tracks, currentTrack, cureentIndex, isPlayingPlayer } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );
  const [position, setPosition] = useState(0);
  const player = useAudioPlayer({ uri: currentTrack?.preview });
  const status = useAudioPlayerStatus(player);

  useEffect(() => {
    if (isPlayingPlayer) {
      player.play();
    } else {
      player.pause();
    }
    setPosition(player.currentTime);

    return () => {};
  }, [isPlayingPlayer, player]);

  useEffect(() => {
    setPosition(player.currentTime);
    if (player.currentStatus.didJustFinish)
      if (tracks.length < 0) {
        dispatch(setIsPlayingPlayer());
      } else {
        dispatch(setIsPlayingPlayer());
      }

    return () => {};
  }, [status]);

  return (
    <PlayerAudio.Provider value={{ player, status, position, setPosition }}>
      {children}
    </PlayerAudio.Provider>
  );
}
