import { auth } from "@/lib/auth";
import { Nav } from "../components/Nav";
import { redirect } from "next/navigation";

async function getSpotifyData(endpoint: string, accessToken: string, limit: number = 20) {
    try {
      // ZMIANA: medium_term (6 miesięcy) zamiast short_term (4 tyg) dla pewności danych
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

// TheAudioDB API - jedyne źródło gatunków
async function getGenresFromAudioDB(artistName: string) {
    try {
        const apiKey = process.env.AUDIO_DB_API_KEY || '123'; // darmowy klucz
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
      getSpotifyData("top/artists", token, 50), // Więcej artystów dla lepszych statystyk
      getSpotifyData("top/tracks", token, 10),
    ]);

    if (topArtistsData.error) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6 italic text-center italic">
                <p>Błąd API: {topArtistsData.error}. <br/> Spróbuj przelogować się.</p>
            </div>
        )
    }

    // --- LOGI DO KONSOLI ---
    console.log(`POBRANO ARTYSTÓW: ${topArtistsData.items?.length || 0}`);
    
    const genreMap: Record<string, number> = {};
    
    // OPTIMALIZACJA: Równoległe requesty do TheAudioDB dla 15 artystów
    if (topArtistsData.items?.length > 0) {
        console.log("Rozpoczynam równoległe pobieranie gatunków...");
        const startTime = Date.now();
        
        // Przygotuj Promise'y dla 15 artystów (balans szybkość/jakość)
        const genrePromises = topArtistsData.items.slice(0, 15).map(async (artist: any, index: number) => {
            try {
                const genres = await getGenresFromAudioDB(artist.name);
                if (genres && genres.length > 0) {
                    genres.forEach((g: string) => {
                        genreMap[g] = (genreMap[g] || 0) + 1;
                    });
                }
                return { artist: artist.name, genres, success: true };
            } catch (error) {
                return { artist: artist.name, genres: [], success: false };
            }
        });
        
        // Wykonaj wszystkie requesty równolegle
        const results = await Promise.all(genrePromises);
        
        const endTime = Date.now();
        console.log(`✅ Ukończono w ${endTime - startTime}ms`);
        console.log("Wyniki:", results.map(r => `${r.artist}: ${r.success ? r.genres.join(',') : 'BŁĄD'}`));
    }
  
    // Stwórz ranking najpopularniejszych gatunków z liczbą wystąpień
    const genreEntries = Object.entries(genreMap)
        .sort(([, a], [, b]) => b - a) // Sortuj po popularności (malejąco)
        .slice(0, 8); // Top 8 gatunków
    
    const sortedGenres = genreEntries.map(([name]) => name);
    const maxCount = Math.max(...genreEntries.map(([, count]) => count), 1);

    console.log("RANKING GATUNKÓW:", sortedGenres);
    
    // DEBUG: Pokaż przypisanie gatunków do artystów
    console.log("\n=== PRZYPISANIE GATUNKÓW DO ARTYSTÓW ===");
    if (topArtistsData.items?.length > 0) {
        for (const artist of topArtistsData.items.slice(0, 15)) {
            const genres = await getGenresFromAudioDB(artist.name);
            if (genres && genres.length > 0) {
                console.log(` ${artist.name} → ${genres.join(", ")}`);
            } else {
                console.log(` ${artist.name} → BRAK GATUNKU`);
            }
        }
    }
    console.log("=====================================\n");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-3 opacity-70">
            Statystyki Słuchania
          </p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">Vibe Check.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* TOP ARTISTS */}
          <section className="md:row-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm overflow-hidden relative group">
            <h2 className="text-xl font-black mb-8 flex items-center gap-2 uppercase italic tracking-tighter">
              <span className="w-2.5 h-2.5 bg-[#1DB954] rounded-full animate-pulse" />
              Artyści
            </h2>
            <div className="space-y-6">
              {topArtistsData.items?.length > 0 ? (
                topArtistsData.items.slice(0, 10).map((artist: any, i: number) => (
                  <div key={artist.id} className="flex items-center gap-5 group/item">
                    <span className="text-zinc-300 dark:text-zinc-700 font-black text-lg italic w-6 italic tracking-tighter">{i + 1}</span>
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <img 
                        src={artist.images[0]?.url} 
                        alt="" 
                        className="rounded-full object-cover h-full w-full grayscale group-hover/item:grayscale-0 transition-all duration-700 shadow-xl" 
                      />
                    </div>
                    <p className="font-black truncate text-sm uppercase tracking-tight">{artist.name}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs italic opacity-30 text-center py-20 font-bold uppercase">No data found</p>
              )}
            </div>
          </section>

          {/* TOP TRACKS */}
          <section className="md:col-span-2 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 rounded-[2.5rem] overflow-hidden relative group shadow-2xl">
            <h2 className="text-2xl font-black mb-10 uppercase italic leading-none tracking-tighter opacity-90">Ulubione Utwory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
              {topTracksData.items?.slice(0, 4).map((track: any) => (
                <div key={track.id} className="flex flex-col gap-1 border-l-2 border-[#1DB954] pl-4">
                  <p className="font-black text-xl truncate leading-tight tracking-tighter group-hover:text-[#1DB954] transition-colors">{track.name}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">{track.artists[0].name}</p>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-10 right-2 text-[15rem] font-black text-white/[0.03] dark:text-black/[0.03] pointer-events-none select-none italic tracking-tighter">
              TOP
            </div>
          </section>

          {/* TOP GENRES - WYKRES */}
          <section className="bg-[#1DB954] text-black p-8 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 bg-black text-white self-start px-2 py-1">Gatunki</h2>
            
            {genreEntries.length > 0 ? (
              <div className="space-y-3 relative z-10">
                {genreEntries.map(([genre, count], index) => {
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={genre} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-black uppercase tracking-tight truncate flex-1">
                          {genre}
                        </span>
                        <span className="text-[10px] font-black ml-2 bg-black/20 px-2 py-0.5 rounded">
                          {count}
                        </span>
                      </div>
                      <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-black rounded-full transition-all duration-1000 ease-out group-hover:bg-black/90"
                          style={{ 
                            width: `${percentage}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-32">
                <p className="text-xs font-black italic opacity-40 uppercase tracking-widest">Brak danych</p>
              </div>
            )}
            
            {/* Ozdobne kółko */}
            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 border-[15px] border-black/10 rounded-full" />
          </section>

          {/* INFO BOX */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] flex items-center justify-center italic text-zinc-400 text-[10px] uppercase font-black tracking-[0.2em] text-center leading-relaxed">
             Analiza Twoich preferencji muzycznych z ostatnich 6 miesięcy.
          </section>

        </div>
      </main>
    </div>
  );
}