import Link from "next/link";
import { Nav } from "../components/Nav";

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      {/* HERO SECTION (Zostawiona zgodnie z prośbą) */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-zinc-950/5 dark:from-[#1DB954]/5 dark:to-zinc-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[25rem] font-black text-zinc-100 dark:text-zinc-900 italic tracking-tighter opacity-10 select-none">
            ABOUT
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Discover Our Story
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-8">
            O nas.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Zounk to nie tylko platforma. To rewolucja w odkrywaniu muzyki, 
            stworzona przez pasjonatów dla pasjonatów.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        
        {/* MISSION & VALUES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {/* MISSION CARD */}
          <div className="lg:col-span-2 group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 md:p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Nasza Misja</h2>
              </div>
              <div className="space-y-6 max-w-xl">
                <p className="text-xl md:text-2xl font-light leading-tight">
                  Demokratyzujemy analizę muzyczną. Dajemy Ci narzędzia, które kiedyś były dostępne tylko dla branżowych profesjonalistów.
                </p>
                <p className="text-sm opacity-70 font-mono uppercase tracking-widest">
                  Technologia / Dane / Psychologia Muzyki
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
              MISSION
            </div>
          </div>

          {/* VALUES QUICK GRID */}
          <div className="bg-[#1DB954] text-black p-10 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Wartości</h3>
            <div className="space-y-4">
              {['Pasja', 'Odkrywanie', 'Analiza', 'Innowacja'].map((val) => (
                <div key={val} className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="font-black uppercase italic tracking-tighter">{val}</span>
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION - REIMAGINED */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
                Technologia.
              </h2>
              <div className="w-32 h-1 bg-[#1DB954] mt-4"></div>
            </div>
            <p className="text-zinc-500 max-w-xs font-mono text-xs uppercase tracking-widest">
              Wykorzystujemy najnowocześniejsze stacki technologiczne do analizy Twojego brzmienia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                <span className="text-xs font-black">ML</span>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Machine Learning</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Autorskie algorytmy rozpoznające wzorce w Twoich ulubionych gatunkach.
              </p>
            </div>

            <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 shadow-xl">
              <div className="w-12 h-12 bg-white/10 dark:bg-black/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                <span className="text-xs font-black">API</span>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Spotify Cloud</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Głęboka integracja z ekosystemem Spotify zapewniająca błyskawiczny przepływ danych.
              </p>
            </div>

            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                <span className="text-xs font-black">RT</span>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Real-time Data</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Twoje statystyki aktualizują się w czasie rzeczywistym wraz z każdym odsłuchem.
              </p>
            </div>
          </div>
        </section>

        {/* SOLO PROJECT SECTION - CONTACT STYLE */}
        <section className="mb-32">
          <div className="group bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black p-10 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6">The Creator</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none mb-8">
                  Deequey.
                </h2>
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                  Zounk to niezależny projekt łączący pasję do muzyki z nowoczesnym programowaniem. 
                  Każda linia kodu została napisana z myślą o użytkowniku.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'TypeScript', 'Spotify API', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white/5 dark:bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 dark:border-black/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="aspect-square bg-[#1DB954] rounded-[2.5rem] rotate-3 flex items-center justify-center overflow-hidden">
                   <div className="text-black font-black text-9xl -rotate-3 opacity-20 italic">Dev</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter leading-none">
              CODE
            </div>
          </div>
        </section>

        {/* TIMELINE / HISTORY - MODERNIST APPROACH */}
        <section className="mb-32">
           <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none mb-4">
              Nasza Droga.
            </h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Ewolucja pomysłu w rzeczywistość</p>
          </div>

          <div className="space-y-12">
            {[
              { year: '2026 Q1', title: 'Koncepcja', desc: 'Powstanie rewolucyjnego pomysłu analizy muzycznej preferencji.' },
              { year: '2026 Q2', title: 'Development', desc: 'Intensywne prace nad silnikiem analitycznym i integracją API.' },
              { year: '2026 Q4', title: 'Public Launch', desc: 'Udostępnienie platformy światu i budowa pierwszej społeczności.' }
            ].map((step, idx) => (
              <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-2 text-4xl font-black italic tracking-tighter text-zinc-300 dark:text-zinc-700 group-hover:text-[#1DB954] transition-colors">
                  {step.year}
                </div>
                <div className="hidden md:block md:col-span-1 h-px bg-zinc-200 dark:bg-zinc-800 group-hover:bg-[#1DB954] transition-colors"></div>
                <div className="md:col-span-9 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] group-hover:translate-x-2 transition-all duration-300">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">{step.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS SECTION - CONTACT STYLE */}
        <section className="bg-[#1DB954] text-black p-12 md:p-20 rounded-[3rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden mb-32">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 text-center uppercase italic tracking-tighter">
              Zaufanie w Liczbach
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-6xl font-black mb-2 tracking-tighter">2.1k</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Użytkowników</p>
              </div>
              <div>
                <div className="text-6xl font-black mb-2 tracking-tighter">50M</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Analiz</p>
              </div>
              <div>
                <div className="text-6xl font-black mb-2 tracking-tighter">1k+</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Artystów</p>
              </div>
              <div>
                <div className="text-6xl font-black mb-2 tracking-tighter">100%</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Pasji</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-black/5 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 border-[30px] border-black/5 rounded-full" />
        </section>

        {/* CTA SECTION - SHARED STYLE */}
        <section className="text-center py-20 relative overflow-hidden rounded-[3rem] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">
            Gotowy na muzyczną rewolucję?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto px-6">
            Dołącz do tysięcy osób, które przestały tylko słuchać, a zaczęły rozumieć swoją muzykę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Link
              href="/stats"
              className="bg-[#1DB954] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
            >
              Rozpocznij Teraz
            </Link>
            <Link
              href="/kontakt"
              className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300"
            >
              Skontaktuj się
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}