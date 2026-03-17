import Link from "next/link";
import { Nav } from "../components/Nav";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-zinc-950/5 dark:from-[#1DB954]/5 dark:to-zinc-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[25rem] font-black text-zinc-100 dark:text-zinc-900 italic tracking-tighter opacity-10 select-none">
            BLOG
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Discover Our Stories
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-8">
            Blog.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Odkryj świat muzyki poprzez nasze artykuły, analizy i inspiracje.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        
        {/* FEATURED ARTICLE */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Wyróżniony Artykuł</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1DB954] to-zinc-900 rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-black text-white/20 group-hover:text-white/30 transition-colors">🎵</span>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-[#1DB954] text-black rounded-full text-xs font-black uppercase tracking-tighter">
                    Featured
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-2">
                  15 marca 2024
                </p>
                <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">
                  Przyszłość Muzyki: Jak AI Zmienia Nasze Gusty
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Odkryj jak sztuczna inteligencja rewolucjonizuje sposób, w jaki odkrywamy, 
                  słuchamy i analizujemy muzykę. Przewidywania trendów i personalizacja na niespotykaną skalę.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center">
                      <span className="text-xs font-black text-black">AI</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter">Zespół Zounk</span>
                  </div>
                  <span className="text-sm text-zinc-500">•</span>
                  <span className="text-sm text-zinc-500">8 min czytania</span>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#1DB954] text-black px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#1db954]/20"
              >
                Czytaj dalej
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-none mb-4">
              Kategorie.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">Znajdź temat, który Cię interesuje</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-8 rounded-[2.5rem] shadow-xl text-center hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                <span className="text-2xl font-black text-black">🎵</span>
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Analiza</h3>
              <p className="text-sm opacity-80">24 artykuły</p>
            </div>
            
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-lg text-center hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                <span className="text-2xl font-black text-black">🔬</span>
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Technologia</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">18 artykułów</p>
            </div>
            
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-lg text-center hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                <span className="text-2xl font-black text-black">🎨</span>
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Trendy</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">32 artykuły</p>
            </div>
            
            <div className="group bg-[#1DB954] text-black p-8 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 text-center hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                <span className="text-2xl font-black text-white">🎯</span>
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Poradniki</h3>
              <p className="text-sm opacity-80">15 artykułów</p>
            </div>
          </div>
        </section>

        {/* RECENT POSTS */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">Najnowsze Artykuły</h2>
            </div>
            <Link
              href="#"
              className="text-[#1DB954] font-black text-sm uppercase tracking-tighter hover:gap-2 transition-all duration-300 flex items-center gap-1"
            >
              Zobacz wszystkie
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-lg overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="aspect-[16/10] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1DB954] text-black rounded-full text-xs font-black uppercase tracking-tighter">
                    Analiza
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-2">
                  14 marca 2024
                </p>
                <h3 className="text-xl font-black mb-3 uppercase italic tracking-tighter">
                  Top 10 Artystów Marca 2024
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Sprawdź kto króluje na listach przebojów tego miesiąca. Surprising zmiany i nowe gwiazdy.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">5 min czytania</span>
                  <span className="text-[#1DB954] font-black text-sm uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-lg overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="aspect-[16/10] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1DB954] text-black rounded-full text-xs font-black uppercase tracking-tighter">
                    Technologia
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-2">
                  12 marca 2024
                </p>
                <h3 className="text-xl font-black mb-3 uppercase italic tracking-tighter">
                  Spotify API vs Apple Music
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Porównanie dwóch największych platform streamingowych z perspektywy dewelopera.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">7 min czytania</span>
                  <span className="text-[#1DB954] font-black text-sm uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-lg overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="aspect-[16/10] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1DB954] text-black rounded-full text-xs font-black uppercase tracking-tighter">
                    Trendy
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-2">
                  10 marca 2024
                </p>
                <h3 className="text-xl font-black mb-3 uppercase italic tracking-tighter">
                  Phonk Revival: Powrót Starego Szkoły
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  Dlaczego phonk wraca do łask i jak TikTok zmienił obraz muzyki undergroundowej.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">6 min czytania</span>
                  <span className="text-[#1DB954] font-black text-sm uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-[#1DB954] text-black p-12 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden mb-20">
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
                Bądź na bieżąco
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Otrzymuj najnowsze artykuły, analizy i ekskluzywne treści prosto na swoją skrzynkę.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="flex-1 px-4 py-3 bg-black/10 rounded-xl font-black text-sm uppercase tracking-tighter placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300"
                >
                  Zapisz się
                </button>
              </form>
              <p className="text-xs mt-4 opacity-70">
                Dołącz do 2137+ subskrybentów. Bez spamu, obiecujemy.
              </p>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-40 h-40 border-[20px] border-black/10 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 border-[15px] border-black/10 rounded-full" />
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-black mb-2 text-[#1DB954]">89</div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">Artykułów</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-2 text-[#1DB954]">15K</div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">Czytelników</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-2 text-[#1DB954]">4.8</div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">Ocena</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-2 text-[#1DB954]">24/7</div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">Nowe treści</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
            Chcesz napisać dla nas?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Szukamy utalentowanych autorów z pasją do muzyki i technologii. Dołącz do naszego zespołu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-[#1DB954] text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
            >
              Skontaktuj się
            </Link>
            <Link
              href="/stats"
              className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300"
            >
              Sprawdź statystyki
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
