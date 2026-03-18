import Link from "next/link";
import { Nav } from "../components/Nav";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1DB954] selection:text-black">
      <Nav />
      
      {/* HERO SECTION - Zgodnie z prośbą zachowana baza, ulepszone detale */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-zinc-950/5 dark:from-[#1DB954]/5 dark:to-zinc-900/50" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[25vw] font-black text-zinc-100 dark:text-zinc-900 italic tracking-tighter opacity-20 select-none leading-none">
            CONTACT
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Get In Touch
          </p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic uppercase leading-none mb-8">
            Kontakt.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Masz pytania? Chcesz współpracować? Jesteśmy tu, aby pomóc Ci wycisnąć 100% z Twoich danych muzycznych.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        
        {/* CONTACT METHODS GRID - MODERNIST CARDS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          
          {/* EMAIL CARD - HIGH CONTRAST */}
          <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Email.</h3>
              <div className="space-y-6">
                <div className="group/item cursor-pointer">
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-1 group-hover/item:text-[#1DB954] transition-colors">Główny</p>
                  <p className="font-black text-xl tracking-tighter">kontakt@zounk.pl</p>
                </div>
                <div className="group/item cursor-pointer">
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-1 group-hover/item:text-[#1DB954] transition-colors">Biznes</p>
                  <p className="font-black text-xl tracking-tighter">biznes@zounk.pl</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
              @
            </div>
          </div>

          {/* SOCIAL MEDIA CARD - CLEAN GRID */}
          <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[3rem] shadow-xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Social.</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
                <div key={platform} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl text-center group/social hover:bg-[#1DB954] transition-all duration-300 cursor-pointer">
                  <p className="text-[10px] font-black uppercase tracking-widest group-hover/social:text-black">
                    {platform}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RESPONSE INFO CARD - THE GREEN ONE */}
          <div className="group bg-[#1DB954] text-black p-10 rounded-[3rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Dostępność.</h3>
              <div className="text-center my-4">
                <div className="text-8xl font-black italic tracking-tighter leading-none mb-2">24h</div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Czas Odpowiedzi</p>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-1 text-[10px] font-black uppercase tracking-widest">
                  <span>Email</span>
                  <span>12-24H</span>
                </div>
                <div className="flex items-center justify-between border-b border-black/10 pb-1 text-[10px] font-black uppercase tracking-widest">
                  <span>Support</span>
                  <span>LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION - SPLIT DESIGN */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
                <h2 className="text-5xl font-black uppercase italic tracking-tighter">Wyślij<br/>Wiadomość.</h2>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                Masz pomysł na nową funkcję? A może znalazłeś błąd w naszych algorytmach? 
                Pisz śmiało – każdy feedback buduje przyszłość Zounk.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Szybka odpowiedź", desc: "Zwykle w mniej niż 12h", icon: "⚡" },
                { title: "Bezpieczeństwo", desc: "Szyfrowane połączenie SSL", icon: "🔒" },
                { title: "Support", desc: "Pomoc techniczna 24/7", icon: "🛠️" }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 rounded-[3.5rem] shadow-2xl relative">
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Imię</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all border-none"
                    placeholder="JAN KOWALSKI"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all border-none"
                    placeholder="HELLO@WORLD.PL"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Temat</label>
                <select className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1DB954] appearance-none transition-all">
                  <option>Współpraca Biznesowa</option>
                  <option>Pomoc Techniczna</option>
                  <option>Feedback / Sugestie</option>
                  <option>Inne</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Wiadomość</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all resize-none border-none"
                  placeholder="TWOJA WIADOMOŚĆ..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1DB954] dark:hover:bg-[#1DB954] hover:text-black transition-all duration-500 shadow-xl"
              >
                Wyślij Wiadomość — Send
              </button>
            </form>
          </div>
        </section>

        {/* FAQ SECTION - MINIMALIST LIST */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-4">
              FAQ.
            </h2>
            <div className="w-24 h-1 bg-[#1DB954] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "Jak połączyć konto?", a: "Wystarczy kliknąć przycisk 'Zaloguj przez Spotify' na stronie głównej." },
              { q: "Czy to jest darmowe?", a: "Tak, podstawowa analiza Twoich statystyk jest i zawsze będzie darmowa." },
              { q: "Moje dane są bezpieczne?", a: "Korzystamy z oficjalnego API Spotify. Nigdy nie przechowujemy Twojego hasła." },
              { q: "Jak usunąć dane?", a: "W ustawieniach profilu możesz w każdej chwili trwale usunąć swoje konto." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] hover:border-[#1DB954] transition-all duration-300">
                <h3 className="text-lg font-black mb-4 uppercase italic tracking-tighter flex items-center gap-3">
                  <span className="text-[#1DB954] font-mono text-xs">0{idx+1}</span>
                  {item.q}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center py-20 bg-zinc-950 dark:bg-zinc-50 rounded-[4rem] text-white dark:text-black relative overflow-hidden group">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter relative z-10">
            Masz więcej pytań?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 px-6">
            <Link
              href="/stats"
              className="bg-[#1DB954] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Sprawdź Statystyki
            </Link>
            <Link
              href="/o-nas"
              className="bg-transparent border-2 border-white dark:border-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-500"
            >
              Poznaj Nas
            </Link>
          </div>
          <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter leading-none">
            HELP
          </div>
        </section>

      </main>
    </div>
  );
}