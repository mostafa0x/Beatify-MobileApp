import { setNextSong } from "@/lib/store/AudioPlayerSlice";
import { StateType } from "@/types/store/StateType";
import {
  AudioPlayer,
  AudioStatus,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import { usePathname, useRouter } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PlayerAudioType {
  player: AudioPlayer | undefined;
  status: AudioStatus | undefined;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  pauseAudio: () => void;
  playAudio: () => void;
}

const PlayerAudio = createContext<PlayerAudioType>({
  player: undefined,
  status: undefined,
  position: 0,
  playAudio: () => {},
  setPosition: () => {},
  pauseAudio: () => {},
});

export default function PlayerAudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const router = useRouter();
  const { playListTracks, currentTrack, isPlayingPlayer, onTrack } =
    useSelector((state: StateType) => state.AudioPlayerReducer);
  const [position, setPosition] = useState(0);
  const player = useAudioPlayer({ uri: currentTrack?.preview });
  const status = useAudioPlayerStatus(player);

  function playAudio() {
    if (player?.id) {
      player?.play();
    }
  }
  function pauseAudio() {
    if (player && player.currentStatus.isLoaded) {
      player?.pause();
    }
  }

  useEffect(() => {
    if (player) {
      isPlayingPlayer ? playAudio() : pauseAudio();
    }

    return () => {};
  }, [isPlayingPlayer, player]);

  useEffect(() => {
    if (!player) return;
    player && setPosition(player.currentTime);

    return () => {};
  }, [player]);

  useEffect(() => {
    const isJustFinish = player.currentStatus.didJustFinish;

    let time: number | undefined = undefined;
    if (isJustFinish) {
      dispatch(setNextSong());
    }
    if (currentTrack?.preview == "") {
      dispatch(setNextSong());
    }
    setPosition(player.currentTime);

    return () => {
      clearTimeout(time);
    };
  }, [status, player]);

  useEffect(() => {
    if (pathName == "/Song") {
      currentTrack?.id !== onTrack?.id &&
        router.replace({
          pathname: "/Song" as any,
          params: { id: currentTrack?.id },
        });
    }

    return () => {};
  }, [currentTrack]);

  return (
    <PlayerAudio.Provider
      value={{
        player,
        status,
        position,
        setPosition,
        pauseAudio,
        playAudio,
      }}
    >
      {children}
    </PlayerAudio.Provider>
  );
}

export const usePlayerAudio = () => useContext(PlayerAudio);
