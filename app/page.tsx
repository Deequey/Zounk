import Link from "next/link";
import { Nav } from "./components/Nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#0ad150] selection:text-black overflow-x-hidden relative">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1DB954] rounded-full blur-[200px] opacity-[0.07] pointer-events-none -z-10" />
      <div className="absolute top-[80vh] right-10 w-[600px] h-[600px] bg-[#1DB954] rounded-full blur-[250px] opacity-[0.05] pointer-events-none -z-10" />
      
      <Nav />

      <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-12 mx-auto relative z-10">

        {/* HERO SECTION - MEGA IMPACT */}
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
          {/* Huge background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-[22vw] font-black text-zinc-200/50 dark:text-zinc-800/50 italic tracking-tighter select-none leading-none">
              ZOUNK
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] mb-10">
              music<br />
              <span className="text-[#0ad150]">but make it</span><br />
              personal
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed max-w-xl mx-auto font-medium">
              {"Music isn't background noise — it's who you are. Zounk decodes your Spotify history so you can explore your identity, flex your taste, and settle arguments with friends."}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/stats"
                className="group relative bg-[#0ad150] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-110 transition-all duration-500 shadow-2xl shadow-[#0ad150]/40"
              >
                Connect Spotify
              </Link>
              <Link
                href="/battles"
                className="group bg-transparent border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500"
              >
                Start a Battle
              </Link>
            </div>
          </div>
        </section>

        {/* KINETYCZNY PASEK MARQUEE */}
        <div className="rotate-1 bg-[#1DB954] py-5 w-[140%] -ml-[20%] mb-28 shadow-[0_15px_50px_rgba(29,185,84,0.3)] z-20 relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-infinite font-black italic uppercase text-2xl md:text-3xl tracking-tighter text-black select-none">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="mx-10 flex items-center gap-8">
                Decode your sound <span className="text-white">✦</span> Battle friends <span className="text-white">✦</span> Spotify Analysis <span className="text-white">✦</span> Zounk your taste <span className="text-white">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES GRID - MODERNIST CARDS */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 px-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#1DB954] font-black mb-3">Core Modules</p>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
                Features.
              </h2>
              <div className="w-40 h-2 bg-[#1DB954] mt-6"></div>
            </div>
            <p className="text-zinc-500 max-w-sm font-mono text-xs uppercase tracking-widest leading-relaxed">
              {"Advanced analytical tools designed to translate complex stream statistics into visual listening profiles."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:gap-12">
            
            {/* FEATURE 1 */}
            <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 lg:p-16 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#1DB954] dark:hover:border-[#1DB954] hover:shadow-[0_25px_60px_rgba(29,185,84,0.12)]">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-5xl font-black mb-8 opacity-20 group-hover:text-[#1DB954] group-hover:opacity-100 transition-all duration-500">01</div>
                  <h3 className="text-4xl 2xl:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-[0.9]">Top<br />Artists.</h3>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                    {"Your top artists don't lie. They're a portrait of your soul — and the first thing you pull up when someone questions your taste."}
                  </p>
                </div>
                
                {/* Micro visual: Artist tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Kanye West", "Billie Eilish", "Radiohead"].map((artist, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-[10px] font-black italic uppercase tracking-wider group-hover:border-[#1DB954]/40 transition-colors">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-zinc-100 dark:text-zinc-800/20 pointer-events-none select-none italic tracking-tighter group-hover:text-[#1DB954]/5 transition-colors">
                TOP
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="group relative bg-zinc-950 text-white p-12 lg:p-16 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(29,185,84,0.18)] border border-transparent hover:border-[#1DB954]">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-5xl font-black mb-8 opacity-25 group-hover:text-[#1DB954] group-hover:opacity-100 transition-all duration-500">02</div>
                  <h3 className="text-4xl 2xl:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-[0.9] text-white">Genre<br />DNA.</h3>
                  <p className="text-base opacity-75 mb-8 leading-relaxed font-medium text-zinc-300">
                    {"The genres you keep returning to say more about you than any personality test. Map your DNA and see who in your circle shares your sound."}
                  </p>
                </div>

                {/* Micro visual: Colored bars */}
                <div className="space-y-2.5 mt-4">
                  {[
                    { name: "Alternative Rock", w: "80%", color: "bg-[#1DB954]" },
                    { name: "Art Pop", w: "60%", color: "bg-white" },
                    { name: "Synthwave", w: "45%", color: "bg-zinc-600" }
                  ].map((genre, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest opacity-60">
                        <span>{genre.name}</span>
                        <span>{genre.w}</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div style={{ width: genre.w }} className={`h-full ${genre.color} transition-all duration-1000`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-white/[0.02] pointer-events-none select-none italic tracking-tighter group-hover:text-[#1DB954]/5 transition-colors">
                GENRE
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 lg:p-16 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#1DB954] dark:hover:border-[#1DB954] hover:shadow-[0_25px_60px_rgba(29,185,84,0.12)]">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-5xl font-black mb-8 opacity-20 group-hover:text-[#1DB954] group-hover:opacity-100 transition-all duration-500">03</div>
                  <h3 className="text-4xl 2xl:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-[0.9]">Music<br />Battles.</h3>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                    {"Who’s more underground? Who’s the rebel, who’s secretly a softie? Challenge a friend and let your listening history settle the debate."}
                  </p>
                </div>

                {/* Micro visual: Battle VS bar */}
                <div className="bg-zinc-50 dark:bg-zinc-950 p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl space-y-3 mt-4">
                  <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest">
                    <span className="font-bold text-[#1DB954]">YOU (84%)</span>
                    <span className="opacity-40">VS</span>
                    <span className="opacity-60">FRIEND (52%)</span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                    <div className="w-[62%] h-full bg-[#1DB954]" />
                    <div className="w-[38%] h-full bg-zinc-300 dark:bg-zinc-600" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-zinc-100 dark:text-zinc-800/20 pointer-events-none select-none italic tracking-tighter group-hover:text-[#1DB954]/5 transition-colors">
                RECS
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION - MEGA BLOCK */}
        <section className="bg-zinc-950 text-white border border-zinc-800/60 p-16 md:p-24 rounded-[4rem] relative overflow-hidden mb-32 group">
          
          {/* Glowing gradient background circle */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1DB954] rounded-full blur-[180px] opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-1000" />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0 opacity-5">
            <span className="text-[20vw] font-black italic uppercase tracking-tighter">METRICS</span>
          </div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-16">
            
            {/* Grid of stats */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 flex-1 text-left w-full">
              <div className="space-y-3 border-l-4 border-zinc-800 group-hover:border-[#1DB954] pl-6 transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-white">2k+</div>
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1DB954]">Active Analysts</p>
              </div>
              
              <div className="space-y-3 border-l-4 border-zinc-800 group-hover:border-[#1DB954] pl-6 transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-white">50M+</div>
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1DB954]">Tracks Processed</p>
              </div>
              
              <div className="space-y-3 border-l-4 border-zinc-800 group-hover:border-[#1DB954] pl-6 transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-white">12k</div>
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1DB954]">Showdowns Fought</p>
              </div>
              
              <div className="space-y-3 border-l-4 border-zinc-800 group-hover:border-[#1DB954] pl-6 transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-white">24/7</div>
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1DB954]">Active Server</p>
              </div>
            </div>

            {/* Futuristic Visualizer Representation */}
            <div className="w-full xl:w-[400px] h-[220px] bg-black/40 border border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center font-mono text-[9px] tracking-widest text-[#1DB954] font-black uppercase">
                <span>Core Engine</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]"></span>
                </span>
              </div>
              
              {/* Actual animated equalizer graphic */}
              <div className="flex items-end justify-between h-[100px] px-2 gap-1 pb-1">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((val, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 bg-zinc-800 group-hover:bg-[#1DB954] h-full rounded-full origin-bottom animate-bar-${val}`}
                  />
                ))}
              </div>

              <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                <span>SAMPLING RATE: 44.1 KHZ</span>
                <span>STATUS: LIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-24 border-t border-zinc-200 dark:border-zinc-800/80 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-[#1DB954] rounded-full" />
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#1DB954] font-black mb-6">Connect Today</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-12 leading-none">
            Prove your taste.
          </h2>
          <Link
            href="/stats"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-16 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.25em] hover:scale-105 hover:bg-[#1DB954] dark:hover:bg-[#1DB954] hover:text-black transition-all duration-500 shadow-xl cursor-pointer"
          >
            Start for Free →
          </Link>
        </section>

      </main>
    </div>
  );
}