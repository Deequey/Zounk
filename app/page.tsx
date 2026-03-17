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

        {/* FEATURES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Top Artystów</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Odkryj swoich najczęściej słuchanych artystów i śledź zmiany w Twoich gustach muzycznych.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Analiza Gatunków</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Poznaj swoje ulubione gatunki muzyczne i zobacz jak ewoluują Twoje preferencje.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Personalizacja</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Dostosuj swoje doświadczenie i otrzymuj rekomendacje dopasowane do Twojego stylu.
            </p>
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
