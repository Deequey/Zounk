import Link from "next/link";
import { Nav } from "../components/Nav";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-zinc-950/5 dark:from-[#1DB954]/5 dark:to-zinc-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[25rem] font-black text-zinc-100 dark:text-zinc-900 italic tracking-tighter opacity-10 select-none">
            CONTACT
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Get In Touch
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-8">
            Kontakt.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Masz pytania? Chcesz współpracować? Jesteśmy tu dla Ciebie 24/7.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        
        {/* CONTACT METHODS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* EMAIL CARD */}
          <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-[#1DB954] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300">
                <span className="text-3xl font-black text-black">📧</span>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Email</h3>
              <div className="space-y-4">
                <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-1">Główny</p>
                  <p className="font-black text-lg">kontakt@zounk.pl</p>
                </div>
                <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-1">Biznes</p>
                  <p className="font-black text-lg">biznes@zounk.pl</p>
                </div>
                <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-1">Wsparcie</p>
                  <p className="font-black text-lg">support@zounk.pl</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 text-[15rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
              MAIL
            </div>
          </div>

          {/* SOCIAL MEDIA CARD */}
          <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[2.5rem] shadow-lg hover:scale-105 transition-all duration-500">
            <div className="w-20 h-20 bg-[#1DB954] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300">
              <span className="text-3xl font-black text-black">🌐</span>
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Social Media</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">🐦</span>
                <p className="font-black text-sm uppercase tracking-tighter">Twitter</p>
                <p className="text-xs opacity-70">@zounk</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">📘</span>
                <p className="font-black text-sm uppercase tracking-tighter">Facebook</p>
                <p className="text-xs opacity-70">/zounk</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">📷</span>
                <p className="font-black text-sm uppercase tracking-tighter">Instagram</p>
                <p className="text-xs opacity-70">@zounk</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">💼</span>
                <p className="font-black text-sm uppercase tracking-tighter">LinkedIn</p>
                <p className="text-xs opacity-70">/zounk</p>
              </div>
            </div>
          </div>

          {/* RESPONSE INFO CARD */}
          <div className="group bg-[#1DB954] text-black p-10 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl font-black text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Czas Odpowiedzi</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-black mb-2">24h</div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Średni czas odpowiedzi</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <span className="text-sm font-black">Email: 12-24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <span className="text-sm font-black">Social: 2-6h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <span className="text-sm font-black">Support: 24/7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-40 h-40 border-[20px] border-black/10 rounded-full" />
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">Wyślij Wiadomość</h2>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Masz pytania, sugestie lub chcesz rozpocząć współpracę? 
              Wypełnij formularz, a skontaktujemy się z Tobą tak szybko jak to możliwe.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-black">🎯</span>
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tighter">Szybka odpowiedź</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Odpowiadamy w ciągu 24 godzin</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-black">�</span>
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tighter">Bezpieczeństwo</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Twoje dane są u nas bezpieczne</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-black">💡</span>
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tighter">Ekspertka</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Nasz zespół chętnie pomoże</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[2.5rem] shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                  Imię i Nazwisko
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                  Temat
                </label>
                <select className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all">
                  <option>Wybierz temat</option>
                  <option>Pomoc techniczna</option>
                  <option>Współpraca</option>
                  <option>Inne pytanie</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all resize-none"
                  placeholder="Twoja wiadomość..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1DB954] text-black px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
              >
                Wyślij Wiadomość
              </button>
            </form>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-none mb-4">
              FAQ.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">Najczęściej zadawane pytania</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] shadow-sm">
              <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Jak działa Zounk?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Zounk analizuje Twoje dane ze Spotify, aby stworzyć personalizowane statystyki i rekomendacje muzyczne.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] shadow-sm">
              <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Czy jest darmowy?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Tak! Zounk jest całkowicie darmowy. Wystarczy konto Spotify, aby zacząć korzystać.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] shadow-sm">
              <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Jak mogę zacząć?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Po prostu zaloguj się przez Spotify i pozwól nam analizować Twoje muzyczne preferencje.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] shadow-sm">
              <h3 className="text-lg font-black mb-3 uppercase tracking-tighter">Czy moje dane są bezpieczne?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Tak, używamy oficjalnego Spotify API i nigdy nie udostępniamy Twoich danych osobom trzecim.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center">
          <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
            Masz więcej pytań?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Nie wahaj się skontaktować. Nasz zespół jest zawsze gotowy do pomocy!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stats"
              className="bg-[#1DB954] text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1db954]/20"
            >
              Sprawdź Statystyki
            </Link>
            <Link
              href="/o-nas"
              className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all duration-300"
            >
              O nas
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
