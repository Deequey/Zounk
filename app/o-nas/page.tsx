import Link from "next/link";
import { Nav } from "../components/Nav";

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-3 opacity-70">
            O Nas
          </p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">O nas.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* MAIN ABOUT CARD */}
          <section className="md:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[2.5rem] shadow-sm">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2 uppercase italic tracking-tighter">
              <span className="w-2.5 h-2.5 bg-[#1DB954] rounded-full animate-pulse" />
              Nasza Misja
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
              <p className="leading-relaxed">
                Zounk narodził się z pasji do muzyki i technologii. Jesteśmy zespołem entuzjastów, 
                którzy chcą zmienić sposób, w jaki odkrywasz i analizujesz swoje gusta muzyczne.
              </p>
              <p className="leading-relaxed">
                Nasza platforma wykorzystuje zaawansowane algorytmy i dane z Spotify, 
                aby dostarczyć Ci personalizowanych statystyk i rekomendacji, które pomogą 
                Ci lepiej zrozumieć swoje muzyczne preferencje.
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-2xl mt-8">
                <h3 className="font-black text-sm uppercase tracking-tighter mb-4 text-zinc-900 dark:text-zinc-100">
                  Nasze Wartości
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#1DB954] font-black text-lg">🎵</span>
                    <span className="font-black text-sm uppercase tracking-tighter">Pasja</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#1DB954] font-black text-lg">🔍</span>
                    <span className="font-black text-sm uppercase tracking-tighter">Odkrywanie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#1DB954] font-black text-lg">📊</span>
                    <span className="font-black text-sm uppercase tracking-tighter">Analiza</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#1DB954] font-black text-lg">🚀</span>
                    <span className="font-black text-sm uppercase tracking-tighter">Innowacja</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TEAM CARD */}
          <section className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <h2 className="text-xl font-black mb-6 uppercase italic tracking-tighter opacity-90">Zespół</h2>
            <div className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#1DB954] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-black text-black">👨‍💻</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-tighter mb-1">Developer</h3>
                <p className="text-xs opacity-70 font-black uppercase tracking-[0.1em]">Lead & Backend</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#1DB954] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-black text-black">🎨</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-tighter mb-1">Designer</h3>
                <p className="text-xs opacity-70 font-black uppercase tracking-[0.1em]">UI/UX</p>
              </div>
            </div>
            <div className="absolute -bottom-8 right-4 text-[8rem] font-black text-white/[0.02] dark:text-black/[0.02] pointer-events-none select-none italic tracking-tighter">
              TEAM
            </div>
          </section>

          {/* STATS CARD */}
          <section className="md:col-span-3 bg-[#1DB954] text-black p-8 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden">
            <h2 className="text-xl font-black mb-6 uppercase italic tracking-tighter">Statystyki Projektu</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              <div className="text-center">
                <div className="text-3xl font-black mb-2">2137</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Start Projektu</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">2137</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Użytkowników</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">2137</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Analizowanych Utworów</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">24/7</div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Dostępność</p>
              </div>
            </div>
            {/* Ozdobny element */}
            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 border-[15px] border-black/10 rounded-full" />
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
