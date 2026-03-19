import Link from "next/link";
import { Nav } from "../components/Nav";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1DB954] selection:text-black">
      <Nav />
      
      {/* HERO SECTION - Monumentalny start */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-zinc-950/5 dark:from-[#1DB954]/5 dark:to-zinc-900/50" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[18vw] font-black text-zinc-200/50 dark:text-zinc-800/50 italic tracking-tighter select-none leading-none">
            STORIES
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl 2xl:max-w-6xl px-6">
          <p className="text-[#1DB954] font-mono text-xs 2xl:text-sm font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Read Our Universe
          </p>
          <h1 className="text-6xl md:text-9xl 2xl:text-[11rem] font-black tracking-tighter italic uppercase leading-none mb-8">
            Blog.
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl 2xl:max-w-4xl mx-auto font-medium">
            Analizy, trendy i głębokie spojrzenie w przyszłość muzyki. 
            Twoje źródło wiedzy o Music Tech.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER - Pełna szerokość na 2xl */}
      <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-16 mx-auto">
        
        {/* FEATURED ARTICLE - MEGA POWER CARD */}
        <section className="mb-32 2xl:mb-48">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
            <h2 className="text-4xl 2xl:text-5xl font-black uppercase italic tracking-tighter">Wyróżniony.</h2>
          </div>
          
          <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-zinc-900 dark:bg-zinc-100 rounded-[3.5rem] 2xl:rounded-[5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <div className="relative h-[400px] lg:h-full overflow-hidden">
              <div className="absolute inset-0 bg-[#1DB954] opacity-20 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954] to-black flex items-center justify-center text-[10rem] 2xl:text-[15rem]">
                🎵
              </div>
              <div className="absolute top-8 left-8 2xl:top-12 2xl:left-12 z-20">
                <span className="px-4 py-2 bg-[#1DB954] text-black rounded-full text-[10px] 2xl:text-xs font-black uppercase tracking-widest">
                  Hot Story
                </span>
              </div>
            </div>
            
            <div className="p-12 lg:p-20 2xl:p-32 flex flex-col justify-center text-white dark:text-black">
              <p className="text-[#1DB954] font-mono text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.4em] mb-4">
                15 marca 2024 — 8 min czytania
              </p>
              <h3 className="text-4xl md:text-5xl 2xl:text-7xl font-black mb-6 uppercase italic tracking-tighter leading-none">
                AI & Music:<br/>Nowa Era.
              </h3>
              <p className="text-lg 2xl:text-2xl opacity-70 leading-relaxed mb-10 font-medium">
                Sztuczna inteligencja nie tylko sugeruje utwory – ona zaczyna rozumieć Twoje emocje. 
                Jak algorytmy rewolucjonizują odkrywanie muzyki?
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-4 bg-[#1DB954] text-black px-10 py-5 2xl:px-14 2xl:py-7 rounded-2xl font-black text-xs 2xl:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 w-fit"
              >
                Czytaj artykuł <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mb-32 2xl:mb-48">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black tracking-tighter italic uppercase leading-none mb-4">
              Kategorie.
            </h2>
            <div className="w-24 2xl:w-40 h-1 bg-[#1DB954] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 2xl:gap-10">
            {[
              { name: 'Analiza', count: 24, color: 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black' },
              { name: 'Technologia', count: 18, color: 'bg-white dark:bg-zinc-900' },
              { name: 'Trendy', count: 32, color: 'bg-white dark:bg-zinc-900' },
              { name: 'Poradniki', count: 15, color: 'bg-[#1DB954] text-black' }
            ].map((cat) => (
              <div key={cat.name} className={`group ${cat.color} p-10 2xl:p-16 rounded-[2.5rem] 2xl:rounded-[3.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-zinc-200 dark:border-zinc-800`}>
                <h3 className="text-xl 2xl:text-3xl font-black mb-2 uppercase italic tracking-tighter">{cat.name}.</h3>
                <p className="text-[10px] 2xl:text-xs font-mono uppercase tracking-[0.2em] opacity-50">{cat.count} Postów</p>
              </div>
            ))}
          </div>
        </section>

        {/* RECENT POSTS */}
        <section className="mb-32 2xl:mb-48">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl 2xl:text-[8rem] font-black tracking-tighter italic uppercase leading-none">
              Ostatnie.
            </h2>
            <Link href="#" className="font-mono text-xs 2xl:text-sm uppercase tracking-widest text-[#1DB954] hover:underline">
              Zobacz wszystkie Archiwum —&gt;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 2xl:gap-16">
            {[
              { cat: 'Analiza', date: '14.03', title: 'Top 10 Marca 2024', time: '5 min' },
              { cat: 'Tech', date: '12.03', title: 'Spotify API vs Cloud', time: '7 min' },
              { cat: 'Trendy', date: '10.03', title: 'Phonk Revival 2024', time: '6 min' }
            ].map((post, idx) => (
              <article key={idx} className="group cursor-pointer">
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-[2.5rem] 2xl:rounded-[3.5rem] mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1DB954] opacity-0 group-hover:opacity-20 transition-all duration-500" />
                  <div className="absolute top-6 left-6 2xl:top-10 2xl:left-10">
                    <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-[9px] 2xl:text-[11px] font-black uppercase tracking-tighter">
                      {post.cat}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-[#1DB954] font-mono text-[10px] 2xl:text-xs font-bold mb-2">{post.date} — {post.time}</p>
                  <h3 className="text-2xl 2xl:text-4xl font-black mb-3 uppercase italic tracking-tighter group-hover:text-[#1DB954] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm 2xl:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    Sprawdź najnowsze zestawienie gwiazd, które zdominowały streaming w tym miesiącu...
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER - POSTER STYLE */}
        <section className="bg-[#1DB954] text-black p-12 md:p-24 2xl:p-40 rounded-[4rem] 2xl:rounded-[6rem] shadow-2xl shadow-[#1db954]/30 relative overflow-hidden mb-32 2xl:mb-48 group">
          <div className="relative z-10 flex flex-col items-center text-center">
            <p className="font-mono text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.5em] mb-6">Stay Connected</p>
            <h2 className="text-5xl md:text-8xl 2xl:text-[10rem] font-black mb-10 uppercase italic tracking-tighter leading-none">
              Bądź na<br/>Bieżąco.
            </h2>
            <p className="text-lg md:text-xl 2xl:text-3xl font-medium mb-12 max-w-xl 2xl:max-w-4xl opacity-80">
              Cotygodniowa dawka wiedzy o muzyce i technologii prosto na Twój email.
            </p>
            <form className="w-full max-w-md 2xl:max-w-2xl flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="TWOJ@EMAIL.PL"
                className="flex-1 px-8 py-5 2xl:py-7 bg-black/10 rounded-2xl font-black text-xs 2xl:text-sm uppercase tracking-widest placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-black transition-all border-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-10 py-5 2xl:px-14 rounded-2xl font-black text-xs 2xl:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300"
              >
                Join
              </button>
            </form>
            <p className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest mt-8 opacity-50">
              Join 2,137+ Music Nerds
            </p>
          </div>
          <div className="absolute left-0 w-full h-full text-[20rem] 2xl:text-[45rem] font-black text-black/5 pointer-events-none select-none italic tracking-tighter leading-none -translate-y-1/2">
            NEWS
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-12 2xl:gap-24 mb-32 2xl:mb-48 px-4">
          {[
            { label: 'Artykułów', val: '89' },
            { label: 'Czytelników', val: '15k+' },
            { label: 'Ekspertów', val: '12' },
            { label: 'Nowe Posty', val: '24/7' }
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <div className="text-6xl 2xl:text-9xl font-black italic tracking-tighter text-[#1DB954]">{stat.val}</div>
              <p className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.3em] opacity-50">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-24 2xl:py-40 bg-zinc-950 dark:bg-zinc-50 rounded-[4rem] 2xl:rounded-[6rem] text-white dark:text-black relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl 2xl:text-9xl font-black mb-10 uppercase italic tracking-tighter leading-tight">
              Chcesz napisać<br/>Dla nas?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-6">
              <Link
                href="/kontakt"
                className="bg-[#1DB954] text-black px-12 py-6 2xl:px-16 2xl:py-8 rounded-2xl font-black text-xs 2xl:text-sm uppercase tracking-widest hover:scale-110 transition-all duration-500 shadow-xl"
              >
                Zostań Autorem
              </Link>
              <Link
                href="/stats"
                className="bg-transparent border-2 border-white dark:border-black px-12 py-6 2xl:px-16 2xl:py-8 rounded-2xl font-black text-xs 2xl:text-sm uppercase tracking-widest hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-500"
              >
                Twoje Statsy
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 text-[15rem] 2xl:text-[25rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter leading-none">
            WRITE
          </div>
        </section>

      </main>
    </div>
  );
}