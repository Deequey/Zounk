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

      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* HEADER SECTION */}
        <header className="relative mb-20 pt-10">
          <div className="absolute top-0 left-0 text-[12vw] font-black text-zinc-200 dark:text-zinc-900 italic tracking-tighter opacity-40 select-none leading-none -z-10">
            STATS.
          </div>
          <div className="relative z-10">
            <p className="text-[#1DB954] font-mono text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
              Real-time Analysis
            </p>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-none">
              Vibe Check.
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* COLUMN 1: TOP ARTISTS (4/12 width) */}
          <section className="lg:col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[3rem] shadow-xl relative group">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Artyści.</h2>
              <div className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
            </div>

            <div className="space-y-6">
              {topArtistsData.items?.length > 0 ? (
                topArtistsData.items.slice(0, 8).map((artist: any, i: number) => (
                  <div key={artist.id} className="flex items-center gap-6 group/item cursor-pointer">
                    <span className="text-2xl font-black italic tracking-tighter text-zinc-200 dark:text-zinc-800 group-hover/item:text-[#1DB954] transition-colors duration-300">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <img
                        src={artist.images[0]?.url}
                        alt=""
                        className="rounded-full object-cover h-full w-full grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-500 shadow-2xl"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black truncate text-sm uppercase tracking-tighter group-hover/item:translate-x-1 transition-transform">{artist.name}</p>
                      <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Artist Rank</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center opacity-20 font-black italic uppercase italic">Empty Queue</div>
              )}
            </div>
          </section>

          {/* COLUMN 2: TRACKS & GENRES (8/12 width) */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-8">

            {/* TOP TRACKS CARD */}
            <section className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-12 rounded-[3.5rem] overflow-hidden relative group shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-12 uppercase italic leading-none tracking-tighter">Twoje<br />Hymny.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {topTracksData.items?.slice(0, 6).map((track: any) => (
                    <div key={track.id} className="group/track cursor-pointer">
                      <div className="flex flex-col gap-2 border-l-4 border-[#1DB954]/30 hover:border-[#1DB954] pl-6 transition-all duration-300">
                        <p className="font-black text-xl md:text-2xl truncate leading-none tracking-tighter uppercase italic">{track.name}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em]">{track.artists[0].name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Background Watermark */}
              <div className="absolute -bottom-10 right-0 text-[20rem] font-black text-white/[0.03] dark:text-black/[0.03] pointer-events-none select-none italic tracking-tighter leading-none">
                TOP
              </div>
            </section>

            {/* GENRES & INFO BOX GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* GENRES CHART */}
              <section className="bg-[#1DB954] text-black p-10 rounded-[3rem] shadow-2xl shadow-[#1db954]/20 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h2 className="inline-block text-[10px] font-black uppercase tracking-[0.4em] mb-8 bg-black text-white px-3 py-1">Gatunki DNA</h2>

                  {genreEntries.length > 0 ? (
                    <div className="space-y-6 relative z-10">
                      {genreEntries.map(([genre, count], index) => {
                        // Wyliczamy procent względem lidera dla szerokości paska (visual)
                        const barWidth = (count / maxCount) * 100;
                        // Wyliczamy procentowy udział (count / 15 artystów * 100)
                        const displayPercentage = Math.round((count / 15) * 100);

                        return (
                          <div key={genre} className="group/bar">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[12px] font-black uppercase tracking-tighter truncate pr-4">
                                {genre}
                              </span>
                              <span className="text-[10px] font-mono font-black opacity-60">
                                {displayPercentage}%
                              </span>
                            </div>
                            <div className="w-full bg-black/10 rounded-full h-3 overflow-hidden">
                              <div
                                className="h-full bg-black rounded-full transition-all duration-[1500ms] ease-out"
                                style={{
                                  width: `${barWidth}%`,
                                  // Dodajemy opóźnienie, żeby paski "wjechały" po kolei
                                  transitionDelay: `${index * 100}ms`
                                }}
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

                {/* Decorative Watermark */}
                <div className="absolute -bottom-6 -right-6 text-9xl font-black text-black/5 italic tracking-tighter pointer-events-none">GENRE</div>
              </section>

              {/* INFO / ACTION BOX */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[3rem] flex flex-col justify-between relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-widest mb-4 opacity-30">Metodologia</p>
                  <p className="text-lg font-black uppercase italic tracking-tighter leading-tight text-zinc-400">
                    Analiza preferencji z ostatnich 6 miesięcy na podstawie algorytmów AudioDB.
                  </p>
                </div>

                <button className="relative z-10 mt-8 w-full py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1DB954] hover:text-black transition-all duration-500">
                  Udostępnij Wynik
                </button>

                {/* Background decor */}
                <div className="absolute top-[-40px] right-[-40px] w-32 h-32 border-[20px] border-zinc-50 dark:border-zinc-800 rounded-full" />
              </section>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}