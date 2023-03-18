import axios from "axios";

const getPlaylist = async (accessToken: string, playlistId: string) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data
  } catch (error) {
    console.error(`Error fetching playlist: ${error}`);
    return error
  }
};

export { getPlaylist }