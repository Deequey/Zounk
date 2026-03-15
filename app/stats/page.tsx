import { auth } from "@/lib/auth";
import { Nav } from "../components/Nav";
import { redirect } from "next/navigation";

// Funkcja pomocnicza z podstawową obsługą błędów
async function getSpotifyData(endpoint: string, accessToken: string, limit: number = 10) {
  try {
    const res = await fetch(`https://api.spotify.com/v1/me/${endpoint}?time_range=short_term&limit=${limit}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 3600 } // Cache na 1 godzinę, żeby nie uderzać w API za każdym razem
    });
    
    if (!res.ok) return { error: "Failed to fetch" };
    return res.json();
  } catch (error) {
    return { error: "Network error" };
  }
}

export default async function StatsPage() {
  const session = await auth();
  
  if (!session || !(session as any).accessToken) {
    redirect("/");
  }

  const token = (session as any).accessToken;

  // 1. Pobieranie danych
  const [topArtists, topTracks] = await Promise.all([
    getSpotifyData("top/artists", token, 20),
    getSpotifyData("top/tracks", token, 10),
  ]);

  // Sprawdzenie czy nie ma błędu autoryzacji
  if (topArtists.error || topTracks.error) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4 text-center italic">
        <div>
          <p className="mb-4">Twoja sesja Spotify wygasła lub wystąpił błąd połączenia.</p>
          <p className="text-sm text-zinc-500">Wyloguj się i zaloguj ponownie.</p>
        </div>
      </div>
    );
  }

  // 2. BEZPIECZNA LOGIKA GATUNKÓW (z użyciem ?.)
  const genreMap: Record<string, number> = {};

  // Pętla z zabezpieczeniami ?.
  topArtists.items?.forEach((artist: any) => {
    artist.genres?.forEach((genre: string) => {
      genreMap[genre] = (genreMap[genre] || 0) + 1;
    });
  });

  const sortedGenres = Object.entries(genreMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([name]) => name);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <p className="text-[#1DB954] font-mono text-sm font-bold uppercase tracking-widest mb-2">Twoje Ostatnie 4 Tygodnie</p>
          <h1 className="text-5xl font-black tracking-tighter italic uppercase">Vibe Check.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* TOP ARTISTS */}
          <section className="md:row-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl shadow-sm overflow-hidden relative group">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
              Top Artyści
            </h2>
            <div className="space-y-4">
              {topArtists.items?.length > 0 ? (
                topArtists.items.slice(0, 6).map((artist: any, i: number) => (
                  <div key={artist.id} className="flex items-center gap-4 group/item">
                    <span className="text-zinc-400 font-mono text-xs">{i + 1}</span>
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <img src={artist.images[0]?.url} alt="" className="rounded-full object-cover h-full w-full grayscale group-hover/item:grayscale-0 transition-all shadow-md" />
                    </div>
                    <p className="font-semibold truncate text-sm">{artist.name}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs italic opacity-50 text-center py-10">Brak danych o artystach</p>
              )}
            </div>
          </section>

          {/* TOP TRACKS */}
          <section className="md:col-span-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black p-8 rounded-3xl overflow-hidden relative">
            <h2 className="text-2xl font-black mb-6 uppercase italic">Najczęściej grane</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {topTracks.items?.slice(0, 4).map((track: any) => (
                <div key={track.id} className="flex flex-col gap-1">
                  <p className="font-bold text-lg truncate leading-tight tracking-tight">{track.name}</p>
                  <p className="text-zinc-400 dark:text-zinc-500 text-sm uppercase font-medium">{track.artists[0].name}</p>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 text-9xl font-black text-zinc-800 dark:text-zinc-200 opacity-20 pointer-events-none tracking-tighter select-none">
              VIBE
            </div>
          </section>

          {/* TOP GENRES */}
          <section className="bg-[#1DB954] text-black p-6 rounded-3xl flex flex-col justify-between min-h-[160px] shadow-lg shadow-[#1db954]/20">
            <h2 className="text-xs font-black uppercase tracking-widest">Główne Gatunki</h2>
            <div className="flex flex-wrap gap-2">
              {sortedGenres.length > 0 ? (
                sortedGenres.map((genre) => (
                  <span key={genre} className="bg-black text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase whitespace-nowrap">
                    {genre}
                  </span>
                ))
              ) : (
                <p className="text-xs font-medium italic opacity-60">cos sie zjebalo</p>
              )}
            </div>
          </section>

          {/* STOPKA */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl flex items-center justify-center italic text-zinc-500 text-xs text-center leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </section>

        </div>
      </main>
    </div>
  );
}