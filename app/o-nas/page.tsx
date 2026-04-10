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
          <div className="text-[18vw] font-black text-zinc-200/50 dark:text-zinc-800/50 italic tracking-tighter select-none leading-none">
            ABOUT
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl 2xl:max-w-6xl px-6">
          <p className="text-[#1DB954] font-mono text-xs 2xl:text-sm font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Our Philosophy
          </p>
          <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-black tracking-tighter italic uppercase leading-none mb-8">
            About.
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl 2xl:max-w-4xl mx-auto">
            Zounk was built on one belief: listening to music should be even more fun — especially when you can prove to your friends that your taste is on another level.
          </p>
        </div>
      </section>

      {/* Zmieniony tag <main>: Pełna szerokość i responsywne paddingi boczne */}
      <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-16 mx-auto">
        
        {/* MISSION & VALUES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:gap-12 mb-32">
          {/* MISSION CARD */}
          <div className="lg:col-span-2 group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 md:p-16 2xl:p-24 rounded-[2.5rem] shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
                <h2 className="text-3xl 2xl:text-4xl font-black uppercase italic tracking-tighter">Our Mission</h2>
              </div>
              <div className="space-y-6 max-w-xl 2xl:max-w-3xl">
                <p className="text-xl md:text-2xl 2xl:text-3xl font-light leading-tight">
                  Music is identity. The artists you love, the genres you live in — they say more about you than any bio ever could. Zounk gives you the tools to explore that identity and have a hell of a lot of fun doing it.
                </p>
                <p className="text-sm 2xl:text-base opacity-70 font-mono uppercase tracking-widest">
                  Taste / Identity / Battle Culture
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[18rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
              MISSION
            </div>
          </div>

          {/* VALUES QUICK GRID */}
          <div className="bg-[#1DB954] text-black p-10 2xl:p-16 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 flex flex-col justify-center">
            <h3 className="text-2xl 2xl:text-3xl font-black mb-8 uppercase italic tracking-tighter">Values</h3>
            <div className="space-y-4 2xl:space-y-6">
              {['Passion', 'Rivalry', 'Discovery', 'Fun'].map((val) => (
                <div key={val} className="flex items-center justify-between border-b border-black/10 pb-2 2xl:pb-4">
                  <span className="font-black uppercase italic tracking-tighter 2xl:text-xl">{val}</span>
                  <div className="w-2 h-2 2xl:w-3 2xl:h-3 bg-black rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-6xl md:text-8xl 2xl:text-9xl font-black tracking-tighter italic uppercase leading-none">
                How it works.
              </h2>
              <div className="w-32 2xl:w-48 h-1 bg-[#1DB954] mt-4"></div>
            </div>
            <p className="text-zinc-500 max-w-xs 2xl:max-w-sm font-mono text-xs 2xl:text-sm uppercase tracking-widest">
              Your Spotify data, decoded into personality traits, battle scores, and bragging rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-12">
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 2xl:p-16 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                <span className="text-xs 2xl:text-sm font-black">ML</span>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-black mb-4 uppercase italic tracking-tighter">Taste Engine</h3>
              <p className="text-sm 2xl:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Algorithms that detect patterns in your genres and translate them into personality scores you can actually argue about.
              </p>
            </div>

            <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 2xl:p-16 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 shadow-xl">
              <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-white/10 dark:bg-black/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                <span className="text-xs 2xl:text-sm font-black">API</span>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-black mb-4 uppercase italic tracking-tighter">Spotify Cloud</h3>
              <p className="text-sm 2xl:text-base opacity-70 leading-relaxed">
                Deep Spotify API integration pulling your real listening history — no guessing, no faking it.
              </p>
            </div>

            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 2xl:p-16 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                <span className="text-xs 2xl:text-sm font-black">RT</span>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-black mb-4 uppercase italic tracking-tighter">Real-time Data</h3>
              <p className="text-sm 2xl:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Every listen counts. The more you play, the sharper your profile — and the stronger your battle card.
              </p>
            </div>
          </div>
        </section>

        {/* SOLO PROJECT SECTION */}
        <section className="mb-32">
          <div className="group bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black p-10 md:p-20 2xl:p-32 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1DB954] font-mono text-xs 2xl:text-sm font-bold uppercase tracking-[0.4em] mb-6">The Creator</p>
                <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-black tracking-tighter italic uppercase leading-none mb-8">
                  Deequey.
                </h2>
                <p className="text-lg 2xl:text-xl opacity-80 leading-relaxed mb-8 max-w-xl">
                  Zounk is a solo project built by someone who thinks life’s too short to listen to music without awareness. Every line of code written with headphones on.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'TypeScript', 'Spotify API', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-4 py-2 2xl:px-6 2xl:py-3 bg-white/5 dark:bg-black/5 rounded-full text-[10px] 2xl:text-xs font-black uppercase tracking-widest border border-white/10 dark:border-black/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="aspect-square bg-[#1DB954] rounded-[2.5rem] rotate-3 flex items-center justify-center overflow-hidden">
                   <div className="text-black font-black text-9xl 2xl:text-[12rem] -rotate-3 opacity-20 italic">Dev</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 text-[20rem] 2xl:text-[25rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter leading-none">
              CODE
            </div>
          </div>
        </section>

        {/* TIMELINE / HISTORY */}
        <section className="mb-32">
           <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-black tracking-tighter italic uppercase leading-none mb-4">
              The Road.
            </h2>
            <p className="text-zinc-500 font-mono text-sm 2xl:text-base uppercase tracking-widest">From one idea to actual battles</p>
          </div>

          <div className="space-y-12 2xl:space-y-16 max-w-6xl mx-auto">
            {[
              { year: '2026 Q1', title: 'The Idea', desc: 'One question: what if listening to music was a sport? That’s where Zounk began.' },
              { year: '2026 Q2', title: 'Development', desc: 'Building the taste engine, battle system, and Spotify integration from scratch.' },
              { year: '2026 Q4', title: 'Launch', desc: 'First battles fought. First verdicts delivered. A community that takes music taste seriously.' }
            ].map((step, idx) => (
              <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-2 text-4xl 2xl:text-5xl font-black italic tracking-tighter text-zinc-300 dark:text-zinc-700 group-hover:text-[#1DB954] transition-colors">
                  {step.year}
                </div>
                <div className="hidden md:block md:col-span-1 h-px bg-zinc-200 dark:bg-zinc-800 group-hover:bg-[#1DB954] transition-colors"></div>
                <div className="md:col-span-9 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 2xl:p-12 rounded-[2rem] group-hover:translate-x-2 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl 2xl:text-2xl font-black uppercase italic tracking-tighter mb-2">{step.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm 2xl:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#1DB954] text-black p-12 md:p-20 2xl:p-32 rounded-[3rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden mb-32">
          <div className="relative z-10">
            <h2 className="text-4xl 2xl:text-5xl font-black mb-16 text-center uppercase italic tracking-tighter">
              In Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-6xl 2xl:text-8xl font-black mb-2 tracking-tighter">2.1k</div>
                <p className="text-xs 2xl:text-sm font-black uppercase tracking-[0.2em] opacity-80">Users</p>
              </div>
              <div>
                <div className="text-6xl 2xl:text-8xl font-black mb-2 tracking-tighter">50M</div>
                <p className="text-xs 2xl:text-sm font-black uppercase tracking-[0.2em] opacity-80">Tracks Judged</p>
              </div>
              <div>
                <div className="text-6xl 2xl:text-8xl font-black mb-2 tracking-tighter">1k+</div>
                <p className="text-xs 2xl:text-sm font-black uppercase tracking-[0.2em] opacity-80">Battles Fought</p>
              </div>
              <div>
                <div className="text-6xl 2xl:text-8xl font-black mb-2 tracking-tighter">100%</div>
                <p className="text-xs 2xl:text-sm font-black uppercase tracking-[0.2em] opacity-80">Built with passion</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 2xl:w-96 2xl:h-96 border-[40px] 2xl:border-[60px] border-black/5 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 2xl:w-72 2xl:h-72 border-[30px] 2xl:border-[40px] border-black/5 rounded-full" />
        </section>

        {/* CTA SECTION */}
        <section className="text-center py-20 2xl:py-32 relative overflow-hidden rounded-[3rem] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-black mb-6 uppercase italic tracking-tighter">
            Ready to know yourself better?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl 2xl:max-w-4xl 2xl:text-xl mx-auto px-6">
            Join thousands of people who stopped just listening and started actually owning their taste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Link
              href="/stats"
              className="bg-[#1DB954] text-black px-10 py-5 2xl:px-14 2xl:py-6 rounded-2xl font-black text-sm 2xl:text-base uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
            >
              Connect Spotify
            </Link>
            <Link
              href="/bitwy"
              className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-10 py-5 2xl:px-14 2xl:py-6 rounded-2xl font-black text-sm 2xl:text-base uppercase tracking-widest hover:scale-105 transition-all duration-300"
            >
              Start a Battle
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}