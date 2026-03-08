import { cookies } from "next/headers";

export function spotifyFetch(token: string, path: string) {
  return fetch(`https://api.spotify.com/v1${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
}

export async function getSpotifyUserAndToken(): Promise<
  { name: string; id: string; token: string } | null
> {
  const cookieStore = await cookies();
  const token = cookieStore.get("spotify_access_token")?.value;
  if (!token) return null;
  const res = await spotifyFetch(token, "/me");
  if (!res.ok) return null;
  const data = (await res.json()) as { display_name?: string; id: string };
  return { name: data.display_name ?? "Użytkownik", id: data.id, token };
}

export type TopArtist = { id: string; name: string; images: { url: string }[] };
export type TopTrack = {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[]; name: string };
};

const TIME_RANGE = "short_term";
const DEFAULT_LIMIT = 20;

export async function getTopArtists(
  token: string,
  limit = DEFAULT_LIMIT
): Promise<TopArtist[]> {
  const res = await spotifyFetch(
    token,
    `/me/top/artists?time_range=${TIME_RANGE}&limit=${limit}`
  );
  if (!res.ok) return [];
  const data = (await res.json()) as { items: TopArtist[] };
  return data.items;
}

export async function getTopTracks(
  token: string,
  limit = DEFAULT_LIMIT
): Promise<TopTrack[]> {
  const res = await spotifyFetch(
    token,
    `/me/top/tracks?time_range=${TIME_RANGE}&limit=${limit}`
  );
  if (!res.ok) return [];
  const data = (await res.json()) as { items: TopTrack[] };
  return data.items;
}
