import Link from "next/link";
import { Nav } from "./components/Nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1DB954] selection:text-black">
      <Nav />
      
      {/* Zmieniony tag <main>: Usunięto max-w-6xl, dodano w-full i responsywne paddingi */}
      <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-12 mx-auto">
        
        {/* HERO SECTION - MEGA IMPACT */}
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
          {/* Huge background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-[22vw] font-black text-zinc-200/50 dark:text-zinc-800/50 italic tracking-tighter select-none leading-none">
              ZOUNK
            </div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl">
            <div className="inline-block mb-6 px-4 py-1 border border-[#1DB954] rounded-full">
              <p className="text-[#1DB954] font-mono text-[10px] font-bold uppercase tracking-[0.4em]">
                Taste. Identity. Weapon.
              </p>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] mb-10">
              music<br/>
              <span className="text-[#1DB954]">but make it</span><br/>
              personal
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed max-w-xl mx-auto font-medium">
              Music isn't background noise — it's who you are. Zounk decodes your Spotify history so you can explore your identity, flex your taste, and settle arguments with friends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/stats"
                className="group relative bg-[#1DB954] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-110 transition-all duration-500 shadow-2xl shadow-[#1db954]/40"
              >
                Connect Spotify
              </Link>
              <Link
                href="/bitwy"
                className="group bg-transparent border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-500"
              >
                Start a Battle
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES GRID - MODERNIST CARDS */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
                Features.
              </h2>
              <div className="w-32 h-2 bg-[#1DB954] mt-4"></div>
            </div>
            <p className="text-zinc-500 max-w-xs font-mono text-xs uppercase tracking-widest">
              Tools that make listening to music even more fun.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:gap-12">
            {/* FEATURE 1 */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-12 lg:p-16 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 shadow-2xl">
              <div className="relative z-10">
                <div className="text-5xl font-black mb-8 opacity-20 group-hover:text-[#1DB954] group-hover:opacity-100 transition-all">01</div>
                <h3 className="text-4xl 2xl:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Top<br/>Artists.</h3>
                <p className="text-base opacity-70 mb-8 leading-relaxed font-medium">
                  Your top artists don't lie. They're a portrait of your soul — and the first thing you pull up when someone questions your taste.
                </p>
                <ul className="space-y-3 font-mono text-[11px] uppercase tracking-widest opacity-50">
                  <li>• Short term (4 weeks)</li>
                  <li>• Medium term (6 months)</li>
                  <li>• Long term (Years)</li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
                TOP
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="group relative bg-[#1DB954] text-black p-12 lg:p-16 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 shadow-xl shadow-[#1db954]/20">
              <div className="relative z-10">
                <div className="text-5xl font-black mb-8 opacity-20 transition-all">02</div>
                <h3 className="text-4xl 2xl:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Genre<br/>DNA.</h3>
                <p className="text-base opacity-80 mb-8 leading-relaxed font-medium text-black">
                  The genres you keep returning to say more about you than any personality test. Map your DNA and see who in your circle shares your sound.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-[10px] font-black italic uppercase">Vibe Check</span>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-[10px] font-black italic uppercase">Mapping</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-black/5 pointer-events-none select-none italic tracking-tighter">
                GENRE
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 lg:p-16 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 shadow-xl">
              <div className="relative z-10">
                <div className="text-5xl font-black mb-8 opacity-20 group-hover:text-[#1DB954] group-hover:opacity-100 transition-all">03</div>
                <h3 className="text-4xl 2xl:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Music<br/>Battles.</h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                  Who’s more underground? Who’s the rebel, who’s secretly a softie? Challenge a friend and let your listening history settle the debate.
                </p>
                <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mt-auto">
                  <div className="w-2/3 h-full bg-[#1DB954] group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-zinc-100 dark:text-zinc-800 pointer-events-none select-none italic tracking-tighter">
                RECS
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION - MEGA BLOCK */}
        <section className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black p-16 md:p-24 2xl:p-32 rounded-[4rem] relative overflow-hidden mb-32 group">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-7xl 2xl:text-8xl font-black italic tracking-tighter group-hover:text-[#1DB954] transition-colors">2k+</div>
              <p className="text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.3em] opacity-50">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="text-7xl 2xl:text-8xl font-black italic tracking-tighter group-hover:text-[#1DB954] transition-colors">50M</div>
              <p className="text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.3em] opacity-50">Tracks Judged</p>
            </div>
            <div className="space-y-2">
              <div className="text-7xl 2xl:text-8xl font-black italic tracking-tighter group-hover:text-[#1DB954] transition-colors">1k</div>
              <p className="text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.3em] opacity-50">Battles Fought</p>
            </div>
            <div className="space-y-2">
              <div className="text-7xl 2xl:text-8xl font-black italic tracking-tighter group-hover:text-[#1DB954] transition-colors">24/7</div>
              <p className="text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.3em] opacity-50">Always Live</p>
            </div>
          </div>
          {/* Animated decorative circle */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#1DB954] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />
        </section>

        {/* NAVIGATION EXPLORER - MODERN TAGS */}
        <section className="mb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-400 mb-12">Explore</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: 'Battles', href: '/bitwy', emoji: '🥊' },
                { label: 'Blog', href: '/blog', emoji: '📝' },
                { label: 'Contact', href: '/kontakt', emoji: '📧' },
                { label: 'About', href: '/o-nas', emoji: '👥' }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-[#1DB954] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3 font-black uppercase italic tracking-tighter text-sm">
                    <span className="group-hover:scale-125 transition-transform">{link.emoji}</span>
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-[#1DB954] translate-y-full group-hover:translate-y-[90%] transition-transform duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-20 border-t border-zinc-200 dark:border-zinc-800">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#1DB954] mb-4">Ready?</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-10">Prove your taste.</h2>
          <Link
                href="/stats"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 hover:bg-[#1DB954] dark:hover:bg-[#1DB954] hover:text-black transition-all duration-500"
              >
                Start for Free →
            </Link>
        </section>

      </main>
    </div>
  );
}