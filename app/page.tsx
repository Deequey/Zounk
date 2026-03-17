import Link from "next/link";
import { Nav } from "./components/Nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[20rem] font-black text-zinc-100 dark:text-zinc-900 italic tracking-tighter opacity-20 select-none">
              ZOUNK
            </div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl">
            <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
              Discover Your Music
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-8">
              Zounk.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Nowoczesna platforma do analizy Twoich muzycznych preferencji. 
              Połącz Spotify i odkryj swoje statystyki, top artystów i unikalne rekomendacje.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/stats"
                className="group relative bg-[#1DB954] text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  Zobacz Statystyki
                  <span className="absolute -right-1 -top-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-xs">+</span>
                  </span>
                </span>
              </Link>
              <Link
                href="/o-nas"
                className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">ℹ️</span>
                  Dowiedz się więcej
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-3 opacity-70">
              Funkcje
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-none">
              Co Oferujemy.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FEATURE 1 - TOP ARTYSTÓW */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-105">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center transition-transform duration-300">
                    <span className="text-3xl font-black text-black">01</span>
                  </div>
                  <span className="text-4xl font-black text-[#1DB954] opacity-20 group-hover:opacity-40 transition-opacity">MUSIC</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">Top Artystów</h3>
                <p className="text-sm opacity-80 mb-6 leading-relaxed">
                  Odkryj swoich najczęściej słuchanych artystów. Analizuj trendy, śledź zmiany i znajdzij nowych wykonawców dopasowanych do Twojego gustu.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black">1</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter opacity-70">Real-time data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black">2</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter opacity-70">Trend analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black">3</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter opacity-70">Personalized insights</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 text-[15rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
                MUSIC
              </div>
            </div>

            {/* FEATURE 2 - ANALIZA GATUNKÓW */}
            <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-105">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center transition-transform duration-300">
                    <span className="text-3xl font-black text-black">02</span>
                  </div>
                  <span className="text-4xl font-black text-[#1DB954] opacity-20 group-hover:opacity-40 transition-opacity">DATA</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">Analiza Gatunków</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Poznaj swoje ulubione gatunki muzyczne. Zobacz jak ewoluują Twoje preferencje i odkryj nowe style muzyczne.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1DB954]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black text-[#1DB954]">A</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter text-zinc-700 dark:text-zinc-300">Audio features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1DB954]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black text-[#1DB954]">G</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter text-zinc-700 dark:text-zinc-300">Genre mapping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1DB954]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black text-[#1DB954]">E</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter text-zinc-700 dark:text-zinc-300">Evolution tracking</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 text-[15rem] font-black text-zinc-100 dark:text-zinc-800 pointer-events-none select-none italic tracking-tighter">
                DATA
              </div>
            </div>

            {/* FEATURE 3 - PERSONALIZACJA */}
            <div className="group relative bg-[#1DB954] text-black p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl shadow-[#1db954]/20">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center transition-transform duration-300">
                    <span className="text-3xl font-black text-white">03</span>
                  </div>
                  <span className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity">AI</span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">Personalizacja</h3>
                <p className="text-sm opacity-80 mb-6 leading-relaxed">
                  Dostosuj swoje doświadczenie. Otrzymuj rekomendacje dopasowane do Twojego unikalnego stylu muzycznego.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black">AI</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter opacity-80">Smart recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black">⚡</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter opacity-80">Instant updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-black">🎨</span>
                    </div>
                    <span className="text-sm font-black uppercase tracking-tighter opacity-80">Custom interface</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 text-[15rem] font-black text-black/5 pointer-events-none select-none italic tracking-tighter">
                AI
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#1DB954] text-black p-12 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden mb-16">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 text-center uppercase italic tracking-tighter">
              Dołącz do społeczności
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2">2137</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Użytkowników</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">50M+</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Analizowanych utworów</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">1K+</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Artystów</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">24/7</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Dostępność</p>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 border-[20px] border-black/10 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 border-[15px] border-black/10 rounded-full" />
        </section>

        {/* QUICK LINKS */}
        <section className="text-center">
          <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Eksploruj</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="group bg-zinc-100 dark:bg-zinc-800 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tighter hover:bg-[#1DB954] hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                📝 Blog
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">+</span>
              </span>
            </Link>
            <Link
              href="/kontakt"
              className="group bg-zinc-100 dark:bg-zinc-800 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tighter hover:bg-[#1DB954] hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                📧 Kontakt
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">+</span>
              </span>
            </Link>
            <Link
              href="/o-nas"
              className="group bg-zinc-100 dark:bg-zinc-800 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tighter hover:bg-[#1DB954] hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                👥 O nas
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">+</span>
              </span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
