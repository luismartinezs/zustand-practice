import SpotifyPlaylistPlayer from "@/src/components/SpotifyPlaylistPlayer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MusicPlayer() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpotifyPlaylistPlayer />
    </QueryClientProvider>
  );
}
