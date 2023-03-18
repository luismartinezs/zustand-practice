import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import produce, { type Immutable } from 'immer'

type MusicPlayerState = Immutable<{
  audio: HTMLAudioElement | null;
  playlist: any[] | null;
  currentSongIndex: number;
  currentTime: number;
  playbackState: 'playing' | 'paused' | 'stopped';
  play: () => void;
  pause: () => void;
  stop: () => void;
  skipToNext: () => void;
  skipToPrevious: () => void;
  setPlaylist: (playlist: any[]) => void;
}>

const store: StateCreator<MusicPlayerState> = (set) => ({
  audio: null,
  playlist: null,
  currentSongIndex: 0,
  currentTime: 0,
  playbackState: 'stopped',
  play: () => set(produce((draft) => {
    draft.playbackState = 'playing'
    draft.audio.play()
  })),
  pause: () => set(produce((draft) => {
    draft.playbackState = 'paused'
    draft.audio.pause()
  })),
  stop: () => set(produce((draft) => {
    draft.playbackState = 'stopped'
    draft.audio.pause()
    draft.audio.currentTime = 0
  })),
  skipToNext: () => set(produce((draft) => {
    draft.currentSongIndex = (draft.currentSongIndex + 1) % draft.playlist.length
    draft.audio.currentTime = 0
  })),
  skipToPrevious: () => set(produce((draft) => {
    draft.currentSongIndex = (draft.currentSongIndex - 1 + draft.playlist.length) % draft.playlist.length
    draft.audio.currentTime = 0
  })),
  setPlaylist: (playlist) => set(produce((draft) => {
    draft.playlist = playlist
    const song = playlist[draft.currentSongIndex].track
    draft.audio = new Audio(song.preview_url || song.external_urls.spotify)
  }))
})

export const useMusicPlayerStore = create<MusicPlayerState>()(devtools(store))