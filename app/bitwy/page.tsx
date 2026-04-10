import { auth } from "@/lib/auth";
import { Nav } from "../components/Nav";
import { redirect } from "next/navigation";
import BattleClient from "./BattleClient";

async function getSpotifyData(endpoint: string, token: string, limit = 50) {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/me/${endpoint}?time_range=medium_term&limit=${limit}`,
      { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function BitwyPage() {
  const session = await auth();
  const token = (session as any)?.accessToken;

  if (!token) redirect("/");

  const [artistsData, tracksData] = await Promise.all([
    getSpotifyData("top/artists", token, 50),
    getSpotifyData("top/tracks", token, 50),
  ]);

  const artists: any[] = artistsData?.items ?? [];
  const tracks: any[] = tracksData?.items ?? [];

  const avgArtistPopularity = artists.length
    ? Math.round(artists.reduce((s, a) => s + (a.popularity ?? 50), 0) / artists.length)
    : 50;

  const genreMap: Record<string, number> = {};
  artists.forEach((a) =>
    (a.genres ?? []).forEach((g: string) => {
      genreMap[g] = (genreMap[g] || 0) + 1;
    })
  );
  const topGenres = Object.entries(genreMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 15)
    .map(([genre, count]) => ({ genre, count }));

  const avgTrackPopularity = tracks.length
    ? Math.round(tracks.reduce((s, t) => s + (t.popularity ?? 50), 0) / tracks.length)
    : 50;

  const avgTrackYear = tracks.length
    ? Math.round(
        tracks.reduce((s, t) => {
          const y = parseInt(t.album?.release_date?.slice(0, 4) || "2020");
          return s + (isNaN(y) ? 2020 : y);
        }, 0) / tracks.length
      )
    : 2020;

  const profile = {
    name: session?.user?.name ?? "Użytkownik",
    avatar: session?.user?.image ?? "",
    avgArtistPopularity,
    topGenres,
    avgTrackPopularity,
    avgTrackYear,
    topArtists: artists.slice(0, 5).map((a) => a.name),
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1DB954] selection:text-black">
      <Nav />
      <BattleClient profile={profile} />
    </div>
  );
}
