import Link from "next/link";
import { Nav } from "../components/Nav";

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      {/* HERO SECTION */}
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
        
        {/* MISSION SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">Nasza Misja</h2>
            </div>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Zounk narodził się z prostego pytania: "Jak możemy lepiej zrozumieć 
                nasz muzyczny gust?" Odpowiedź prowadzi nas przez dziedziny technologii, 
                danych i psychologii muzyki.
              </p>
              <p>
                Nasza misja to demokratyzacja analizy muzycznej - dajemy Ci narzędzia, 
                które kiedyś były dostępne tylko dla branżowych profesjonalistów.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-lg">
            <h3 className="text-xl font-black mb-6 uppercase italic tracking-tighter">Nasze Wartości</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-black">🎵</span>
                </div>
                <h4 className="font-black text-sm uppercase tracking-tighter mb-1">Pasja</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Muzyka w naszym DNA</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-black">🔍</span>
                </div>
                <h4 className="font-black text-sm uppercase tracking-tighter mb-1">Odkrywanie</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Nowe horyzonty dźwięku</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-black">📊</span>
                </div>
                <h4 className="font-black text-sm uppercase tracking-tighter mb-1">Analiza</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Dane driven insights</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#1DB954] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-black">🚀</span>
                </div>
                <h4 className="font-black text-sm uppercase tracking-tighter mb-1">Innowacja</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Przyszłość muzyki</p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-none mb-4">
              Technologia.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Wykorzystujemy cutting-edge technologie do analizy Twojego muzycznego świata
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-black text-black">AI</span>
                </div>
                <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Machine Learning</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Zaawansowane algorytmy analizują wzorce słuchania i przewidują preferencje
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[8rem] font-black text-white/5 dark:text-black/5 italic tracking-tighter">
                ML
              </div>
            </div>

            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-black text-black">🔌</span>
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Spotify API</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Bezpośrednia integracja z największą platformą streamingową na świecie
              </p>
            </div>

            <div className="group bg-[#1DB954] text-black p-8 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-black text-white">⚡</span>
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Real-time Data</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Aktualizacje na żywo Twoich statystyk i muzycznych odkryć
              </p>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-none mb-4">
              Zespół.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">Ludzie stojący za rewolucją muzyczną</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-[#1DB954] rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-black">👨‍💻</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-full border-4 border-zinc-50 dark:border-zinc-900" />
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Lead Developer</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Architekt systemu & Backend</p>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-tighter">Node.js</span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-tighter">AI/ML</span>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-[#1DB954] rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-black">🎨</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-full border-4 border-zinc-50 dark:border-zinc-900" />
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">UI/UX Designer</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Creative Director & Frontend</p>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-tighter">Figma</span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-tighter">React</span>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-[#1DB954] rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-black">🎵</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-full border-4 border-zinc-50 dark:border-zinc-900" />
              </div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Music Analyst</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Audio Engineer & Data Scientist</p>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-tighter">Python</span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-tighter">DSP</span>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY TIMELINE */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-none mb-4">
              Historia.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">Nasza podróż od pomysłu do rewolucji</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#1DB954]" />
            
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">2024</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Powstanie pomysłu i pierwsze prototypy</p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-[#1DB954] rounded-full border-4 border-zinc-50 dark:border-zinc-900" />
                </div>
                <div className="w-5/12 pl-8">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl">
                    <p className="text-sm font-black">Start projektu</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl">
                    <p className="text-sm font-black">Beta testing</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-[#1DB954] rounded-full border-4 border-zinc-50 dark:border-zinc-900" />
                </div>
                <div className="w-5/12 pl-8">
                  <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Q2 2024</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Pierwsi użytkownicy i feedback</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="text-xl font-black mb-2 uppercase tracking-tighter">Q4 2024</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Publiczna premiera i ekspansja</p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-[#1DB954] rounded-full border-4 border-zinc-50 dark:border-zinc-900" />
                </div>
                <div className="w-5/12 pl-8">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl">
                    <p className="text-sm font-black">Global launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#1DB954] text-black p-12 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden mb-20">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 text-center uppercase italic tracking-tighter">
              Dołącz do społeczności
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black mb-2">2137</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Użytkowników</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">50M+</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Analizowanych utworów</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">1K+</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Artystów</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">24/7</div>
                <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Dostępność</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-40 h-40 border-[20px] border-black/10 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 border-[15px] border-black/10 rounded-full" />
        </section>

        {/* CTA SECTION */}
        <section className="text-center">
          <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
            Gotowy na muzyczną rewolucję?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Dołącz do tysięcy użytkowników, którzy już odkrywają muzykę na nowo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stats"
              className="bg-[#1DB954] text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
            >
              Rozpocznij Teraz
            </Link>
            <Link
              href="/kontakt"
              className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
