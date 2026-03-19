import { auth } from "@/lib/auth";
import { Nav } from "../components/Nav";
import { redirect } from "next/navigation";

async function getSpotifyData(endpoint: string, accessToken: string, limit: number = 20) {
  try {
    const url = `https://api.spotify.com/v1/me/${endpoint}?time_range=short_term&limit=${limit}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: 'no-store'
    });

    if (!res.ok) return { error: res.status };
    return res.json();
  } catch (error) {
    return { error: "Network error" };
  }
}

async function getGenresFromAudioDB(artistName: string) {
  try {
    const apiKey = process.env.AUDIO_DB_API_KEY || '123';
    const url = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${encodeURIComponent(artistName)}`;

    const res = await fetch(url);
    if (!res.ok) return [];

    const data = await res.json();
    if (!data.artists || data.artists.length === 0) return [];

    const artist = data.artists[0];
    return artist.strGenre ? [artist.strGenre] : [];
  } catch (error) {
    return [];
  }
}

export default async function StatsPage() {
  const session = await auth();
  const token = (session as any)?.accessToken;

  if (!token) redirect("/");

  const [topArtistsData, topTracksData] = await Promise.all([
    getSpotifyData("top/artists", token, 50),
    getSpotifyData("top/tracks", token, 12),
  ]);

  if (topArtistsData.error) {
    return (
      <div className="min-h-screen bg-zinc-950 text-[#1DB954] flex items-center justify-center p-6 font-black uppercase italic text-center">
        <p>Błąd API: {topArtistsData.error}. <br /> Spróbuj przelogować się.</p>
      </div>
    )
  }

  const genreMap: Record<string, number> = {};

  if (topArtistsData.items?.length > 0) {
    const genrePromises = topArtistsData.items.slice(0, 15).map(async (artist: any) => {
      try {
        const genres = await getGenresFromAudioDB(artist.name);
        if (genres && genres.length > 0) {
          genres.forEach((g: string) => {
            genreMap[g] = (genreMap[g] || 0) + 1;
          });
        }
      } catch (e) { }
    });
    await Promise.all(genrePromises);
  }

  const genreEntries = Object.entries(genreMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6);

  const maxCount = Math.max(...genreEntries.map(([, count]) => count), 1);

return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1DB954] selection:text-black transition-colors duration-500">
      <Nav />

      {/* Kontener dopasowany do UltraWide (2xl:px-40) */}
      <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-12 mx-auto">

        {/* HEADER SECTION - Skalowanie napisu STATS w tle */}
        <header className="relative mb-20 2xl:mb-32 pt-10">
          <div className="absolute top-0 left-0 text-[15vw] font-black text-zinc-200 dark:text-zinc-900 italic tracking-tighter opacity-40 select-none leading-none -z-10">
            STATS.
          </div>
          <div className="relative z-10">
            <p className="text-[#1DB954] font-mono text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.5em] mb-4">
              Real-time Analysis
            </p>
            <h1 className="text-7xl md:text-9xl 2xl:text-[11rem] font-black tracking-tighter italic uppercase leading-none">
              Vibe Check.
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 items-start">

          {/* COLUMN 1: TOP ARTISTS */}
          <section className="lg:col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 2xl:p-14 rounded-[3rem] 2xl:rounded-[4rem] shadow-xl relative group">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-1xl 2xl:text-3xl font-black uppercase italic tracking-tighter">Artyści.</h2>
              <div className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
            </div>

            <div className="space-y-6 1xl:space-y-10">
              {topArtistsData.items?.length > 0 ? (
                topArtistsData.items.slice(0, 8).map((artist: any, i: number) => (
                  <div key={artist.id} className="flex items-center gap-6 group/item cursor-pointer">
                    <span className="text-2xl 2xl:text-3xl font-black italic tracking-tighter text-zinc-200 dark:text-zinc-800 group-hover/item:text-[#1DB954] transition-colors duration-300">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="relative h-16 w-16 2xl:h-20 2xl:w-20 flex-shrink-0">
                      <img
                        src={artist.images[0]?.url}
                        alt=""
                        className="rounded-full object-cover h-full w-full grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-500 shadow-2xl border-2 border-transparent group-hover/item:border-[#1DB954]"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black truncate text-sm 2xl:text-lg uppercase tracking-tighter group-hover/item:translate-x-1 transition-transform">{artist.name}</p>
                      <p className="text-[10px] 2xl:text-xs font-mono text-zinc-400 uppercase tracking-widest">Artist Rank</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center opacity-20 font-black italic uppercase">Empty Queue</div>
              )}
            </div>
          </section>

          {/* COLUMN 2: TRACKS & GENRES */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-8 2xl:gap-16">

            {/* TOP TRACKS CARD */}
            <section className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-12 2xl:p-20 rounded-[3.5rem] 2xl:rounded-[5rem] overflow-hidden relative group shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-4xl 1xl:text-2xl font-black mb-12 2xl:mb-20 uppercase italic leading-none tracking-tighter">Twoje<br />Hymny.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 2xl:gap-x-20 gap-y-10 2xl:gap-y-16">
                  {topTracksData.items?.slice(0, 6).map((track: any) => (
                    <div key={track.id} className="group/track cursor-pointer">
                      <div className="flex flex-col gap-2 border-l-4 border-[#1DB954]/30 hover:border-[#1DB954] pl-6 transition-all duration-300">
                        <p className="font-black text-md md:text-xl 2xl:text-2xl truncate leading-none tracking-tighter uppercase italic">{track.name}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[10px] 2xl:text-xs font-black uppercase tracking-[0.3em]">{track.artists[0].name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 right-0 text-[20rem] 2xl:text-[30rem] font-black text-white/[0.03] dark:text-black/[0.03] pointer-events-none select-none italic tracking-tighter leading-none">
                TOP
              </div>
            </section>

            {/* GENRES & INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
              <section className="bg-[#1DB954] text-black p-10 2xl:p-14 rounded-[3rem] 2xl:rounded-[4rem] shadow-2xl shadow-[#1db954]/20 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h2 className="inline-block text-[10px] 2xl:text-xs font-black uppercase tracking-[0.4em] mb-8 bg-black text-white px-3 py-1">Gatunki DNA</h2>
                  {genreEntries.length > 0 ? (
                    <div className="space-y-6 2xl:space-y-10 relative z-10">
                      {genreEntries.map(([genre, count], index) => {
                        const barWidth = (count / maxCount) * 100;
                        const displayPercentage = Math.round((count / 15) * 100); // to trzeba bedzie zwiekszyc bo niedokladne wyniki 

                        return (
                          <div key={genre} className="group/bar">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[12px] 2xl:text-lg font-black uppercase tracking-tighter truncate pr-4">{genre}</span>
                              <span className="text-[10px] 2xl:text-xs font-mono font-black opacity-60">{displayPercentage}%</span>
                            </div>
                            <div className="w-full bg-black/10 rounded-full h-3 2xl:h-5 overflow-hidden">
                              <div
                                className="h-full bg-black rounded-full transition-all duration-[1500ms] ease-out"
                                style={{ width: `${barWidth}%`, transitionDelay: `${index * 100}ms` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-40">
                      <p className="text-xs font-black italic opacity-40 uppercase tracking-widest">Wykrywanie brzmienia...</p>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-6 -right-6 text-9xl 2xl:text-[15rem] font-black text-black/5 italic tracking-tighter pointer-events-none uppercase">GENRE</div>
              </section>

              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 2xl:p-14 rounded-[3rem] 2xl:rounded-[4rem] flex flex-col justify-between relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <p className="text-xs 2xl:text-sm font-black uppercase tracking-widest mb-4 opacity-30">Metodologia</p>
                  <p className="text-lg 2xl:text-2xl font-black uppercase italic tracking-tighter leading-tight text-zinc-400">
                    Analiza preferencji z ostatnich 4 tygodni twojego słuchania na Spotify.
                  </p>
                </div>
                <button className="relative z-10 mt-8 w-full py-4 2xl:py-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-black text-[10px] 2xl:text-xs uppercase tracking-widest hover:bg-[#1DB954] hover:text-black transition-all duration-500 shadow-lg">
                  Udostępnij Wynik
                </button>
                <div className="absolute top-[-40px] right-[-40px] w-32 h-32 2xl:w-64 2xl:h-64 border-[20px] 2xl:border-[40px] border-zinc-50 dark:border-zinc-800 rounded-full" />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}