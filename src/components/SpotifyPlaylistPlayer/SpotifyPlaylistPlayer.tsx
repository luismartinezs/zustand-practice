import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

import { getPlaylist } from "@/lib/spotify";
import { Button, HStack } from "@chakra-ui/react";
import { useAudio, useMusicPlayerStore } from "@/store/musicPlayer";

// WARN this is very wrong, do NOT deploy this without creating an API route and making the secret opaque to the client
const accessToken = process.env.NEXT_PUBLIC_SPOTIFY_ACCESS_TOKEN;
const playlistId = "6bNIDeP6xRl7oPjDGUTvlJ";

const SpotifyPlaylistPlayer: React.FC = () => {
  const playlist = useMusicPlayerStore((state) => state.playlist);
  const setPlaylist = useMusicPlayerStore((state) => state.setPlaylist);
  const playbackState = useMusicPlayerStore((state) => state.playbackState);
  const play = useMusicPlayerStore((state) => state.play);
  const pause = useMusicPlayerStore((state) => state.pause);
  const stop = useMusicPlayerStore((state) => state.stop);
  const currentSongIndex = useMusicPlayerStore(
    (state) => state.currentSongIndex
  );
  const skipToNext = useMusicPlayerStore((state) => state.skipToNext);
  const skipToPrevious = useMusicPlayerStore((state) => state.skipToPrevious);

  const query = useQuery(
    "playlist",
    () => {
      if (!accessToken) {
        console.error("No access token provided");
        return null;
      }
      return getPlaylist(accessToken, playlistId);
    },
    {
      onSuccess: (data) => {
        setPlaylist(data.tracks.items);
      },
    }
  );

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HStack>
        <Button minW={100} onClick={skipToPrevious}>
          Prev
        </Button>
        <Button
          minW={100}
          onClick={() => {
            playbackState === "paused" || playbackState === "stopped"
              ? play()
              : pause();
          }}
        >
          {playbackState === "paused" || playbackState === "stopped"
            ? "Play"
            : "Pause"}
        </Button>
        <Button minW={100} onClick={stop}>
          Stop
        </Button>
        <Button minW={100} onClick={skipToNext}>
          Prev
        </Button>
      </HStack>
    </>
  );
};

export default SpotifyPlaylistPlayer;
