import Link from "next/link";
import { Nav } from "../components/Nav";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-3 opacity-70">
            Blog
          </p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">Blog.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* FEATURED POST */}
          <section className="md:col-span-2 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <h2 className="text-xl font-black mb-8 flex items-center gap-2 uppercase italic tracking-tighter opacity-90">
              <span className="w-2.5 h-2.5 bg-[#1DB954] rounded-full animate-pulse" />
              Wyróżniony Artykuł
            </h2>
            <div className="relative z-10">
              <div className="bg-[#1DB954] text-black px-3 py-1 rounded-full inline-block mb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em]">Nowość</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter leading-tight">
                Jak AI zmienia przyszłość odkrywania muzyki
              </h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Odkryj, jak sztuczna inteligencja rewolucjonizuje sposób, w jaki znajdujemy nowe utwory i artystów. 
                Od personalizowanych rekomendacji po predykcje trendów muzycznych.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] opacity-70">15 Mar 2024</span>
                  <span className="text-xs font-black uppercase tracking-[0.2em] opacity-70">5 min czytania</span>
                </div>
                <button className="bg-[#1DB954] text-black px-4 py-2 rounded-xl font-black text-xs uppercase tracking-tighter hover:scale-105 transition-all duration-300">
                  Czytaj Dalej
                </button>
              </div>
            </div>
            <div className="absolute -bottom-10 right-4 text-[10rem] font-black text-white/2 dark:text-black/2 pointer-events-none select-none italic tracking-tighter">
              AI
            </div>
          </section>

          {/* RECENT POSTS */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm">
            <h2 className="text-xl font-black mb-6 uppercase italic tracking-tighter">Najnowsze</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[#1DB954] pl-4">
                <h3 className="font-black text-sm uppercase tracking-tighter mb-2 leading-tight">
                  Top 10 artystów tygodnia
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.1em] mb-2">
                  12 Mar 2024 • 3 min
                </p>
              </div>
              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                <h3 className="font-black text-sm uppercase tracking-tighter mb-2 leading-tight">
                  Nowe funkcje w Zounk
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.1em] mb-2">
                  10 Mar 2024 • 2 min
                </p>
              </div>
              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                <h3 className="font-black text-sm uppercase tracking-tighter mb-2 leading-tight">
                  Porównanie gatunków muzycznych
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.1em] mb-2">
                  8 Mar 2024 • 4 min
                </p>
              </div>
            </div>
          </section>

          {/* CATEGORIES */}
          <section className="bg-[#1DB954] text-black p-8 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden">
            <h2 className="text-xl font-black mb-6 uppercase italic tracking-tighter">Kategorie</h2>
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform cursor-default">
                AI
              </span>
              <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform cursor-default">
                Spotify
              </span>
              <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform cursor-default">
                Analiza
              </span>
              <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform cursor-default">
                Trendy
              </span>
              <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform cursor-default">
                Technologia
              </span>
            </div>
            <div className="absolute -top-5 -right-5 w-20 h-20 border-[10px] border-black/10 rounded-full" />
          </section>

          {/* POST GRID */}
          <section className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-black uppercase italic tracking-tighter">Więcej Artykułów</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] shadow-sm group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-zinc-100 dark:bg-zinc-800 h-32 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎵</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-tighter mb-2 leading-tight group-hover:text-[#1DB954] transition-colors">
                  Historia Twojego gustu muzycznego
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.1em]">
                  5 Mar 2024 • 6 min
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] shadow-sm group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-zinc-100 dark:bg-zinc-800 h-32 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-tighter mb-2 leading-tight group-hover:text-[#1DB954] transition-colors">
                  Jak czytać statystyki Spotify
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.1em]">
                  3 Mar 2024 • 4 min
                </p>
              </div>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <h2 className="text-xl font-black mb-4 uppercase italic tracking-tighter opacity-90">Newsletter</h2>
            <p className="text-sm opacity-80 mb-6 relative z-10">
              Otrzymuj najnowsze artykuły i aktualizacje prosto na swoją skrzynkę.
            </p>
            <div className="space-y-4 relative z-10">
              <input
                type="email"
                placeholder="twój@email.com"
                className="w-full px-4 py-3 bg-white/10 dark:bg-black/10 rounded-xl font-black text-sm uppercase tracking-tighter text-white dark:text-black placeholder-white/50 dark:placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
              />
              <button className="w-full bg-[#1DB954] text-black px-4 py-3 rounded-xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300">
                Zapisz Się
              </button>
            </div>
            <div className="absolute -bottom-8 right-4 text-[8rem] font-black text-white/2 dark:text-black/2 pointer-events-none select-none italic tracking-tighter">
              NEWS
            </div>
          </section>

          {/* BACK BUTTON */}
          <section className="md:col-span-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1DB954] font-black text-sm uppercase tracking-tighter hover:gap-3 transition-all duration-300"
            >
              <span className="text-lg">←</span>
              Wróć na stronę główną
            </Link>
          </section>

        </div>
      </main>
    </div>
  );
}
