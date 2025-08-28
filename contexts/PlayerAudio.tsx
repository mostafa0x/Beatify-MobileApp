import { setCurrentIndex } from "@/lib/store/AudioPlayerSlice";
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

  const { tracks, currentTrack, isPlayingPlayer } = useSelector(
    (state: StateType) => state.AudioPlayerReducer
  );
  const [position, setPosition] = useState(0);
  const player = useAudioPlayer({ uri: currentTrack?.preview });
  const status = useAudioPlayerStatus(player);

  function playAudio() {
    if (player) {
      player.play();
    }
  }

  function pauseAudio() {
    if (player) {
      player.pause();
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
    if (currentTrack?.preview == "") {
      //dispatch(setIsPlayingPlayer());
      dispatch(setCurrentIndex(-1));
    }
    setPosition(player.currentTime);
    if (player.currentStatus.didJustFinish) {
      if (tracks.length <= 0) {
      } else {
        dispatch(setCurrentIndex(-1));

        // dispatch(setIsPlayingPlayer());
      }
    }
    return () => {};
  }, [status]);

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
