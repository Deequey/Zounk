import Link from "next/link";
import { Nav } from "../components/Nav";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Nav />
      
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <p className="text-[#1DB954] font-mono text-xs font-bold uppercase tracking-[0.4em] mb-3 opacity-70">
            Kontakt
          </p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">Kontakt.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CONTACT FORM */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-[2.5rem] shadow-sm">
            <h2 className="text-xl font-black mb-8 flex items-center gap-2 uppercase italic tracking-tighter">
              <span className="w-2.5 h-2.5 bg-[#1DB954] rounded-full animate-pulse" />
              Wyślij Wiadomość
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder="Twoje imię"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder="twoj@email.com"
                />
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
          </section>

          {/* CONTACT INFO */}
          <section className="space-y-6">
            {/* EMAIL CARD */}
            <div className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-black mb-6 uppercase italic tracking-tighter opacity-90">Email</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-[#1DB954] font-black text-2xl">📧</span>
                  <div>
                    <p className="font-black text-sm uppercase tracking-tighter">Główny</p>
                    <p className="text-xs opacity-70 font-black">kontakt@zounk.pl</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#1DB954] font-black text-2xl">💼</span>
                  <div>
                    <p className="font-black text-sm uppercase tracking-tighter">Biznes</p>
                    <p className="text-xs opacity-70 font-black">biznes@zounk.pl</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#1DB954] font-black text-2xl">🎵</span>
                  <div>
                    <p className="font-black text-sm uppercase tracking-tighter">Wsparcie</p>
                    <p className="text-xs opacity-70 font-black">support@zounk.pl</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-4 text-[8rem] font-black text-white/2 dark:text-black/2 pointer-events-none select-none italic tracking-tighter">
                MAIL
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm">
              <h3 className="text-xl font-black mb-6 uppercase italic tracking-tighter">Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">🐦</span>
                  <p className="font-black text-xs uppercase tracking-tighter">Twitter</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">📘</span>
                  <p className="font-black text-xs uppercase tracking-tighter">Facebook</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">📷</span>
                  <p className="font-black text-xs uppercase tracking-tighter">Instagram</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-center group hover:bg-[#1DB954] hover:text-black transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">💼</span>
                  <p className="font-black text-xs uppercase tracking-tighter">LinkedIn</p>
                </div>
              </div>
            </div>

            {/* RESPONSE TIME */}
            <div className="bg-[#1DB954] text-black p-6 rounded-[2.5rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-3">Czas Odpowiedzi</h3>
              <div className="relative z-10">
                <p className="text-2xl font-black mb-1">24h</p>
                <p className="text-xs font-black uppercase tracking-[0.1em] opacity-80">Średni czas odpowiedzi</p>
              </div>
              <div className="absolute -top-5 -right-5 w-20 h-20 border-[10px] border-black/10 rounded-full" />
            </div>
          </section>

          {/* BACK BUTTON */}
          <section className="md:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-[2.5rem] text-center">
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
