// components/Nav.tsx
import Link from "next/link";
import { auth, signIn, signOut } from "@/lib/auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/stats", label: "Stats" },
  { href: "/blog", label: "Blog" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export async function Nav() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3 relative z-[110]">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1DB954] transition-all duration-500 group-hover:rotate-[360deg] group-hover:rounded-full shadow-lg shadow-[#1db954]/20">
            <span className="text-lg font-black text-black">Z</span>
          </div>
          <span className="text-2xl font-black italic uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 group-hover:text-[#1DB954] transition-colors">
            Zounk.
          </span>
        </Link>

        {/* DESKTOP NAV (Center) */}
        <div className="hidden lg:flex items-center bg-zinc-100 dark:bg-zinc-900 px-2 py-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 transition-all hover:text-[#1DB954] dark:hover:text-[#1DB954] relative group"
            >
              <span className="relative z-10">{label}</span>
              <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-0 shadow-sm" />
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: AUTH & MOBILE TOGGLE */}
        <div className="flex items-center gap-4 relative z-[110]">
          {session ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end leading-none pr-2 border-r border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-900 dark:text-zinc-100">
                  {session.user?.name?.split(' ')[0]}
                </span>
                <span className="text-[8px] font-mono text-[#1DB954] uppercase tracking-widest">Active</span>
              </div>
              
              <div className="relative group">
                <img 
                  src={session.user?.image || ""} 
                  alt="Avatar" 
                  className="h-10 w-10 rounded-2xl object-cover border-2 border-transparent group-hover:border-[#1DB954] transition-all duration-500" 
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1DB954] rounded-full border-4 border-white dark:border-zinc-950" />
              </div>

              <form action={async () => { "use server"; await signOut(); }}>
                <button type="submit" className="hidden md:flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 hover:bg-red-500 hover:text-white transition-all duration-300">
                  <span className="text-xs">✕</span>
                </button>
              </form>
            </div>
          ) : (
            <form action={async () => { "use server"; await signIn("spotify"); }}>
              <button type="submit" className="flex items-center gap-3 rounded-2xl bg-[#1DB954] px-6 py-3 text-[10px] font-black uppercase tracking-widest text-black transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#1db954]/20">
                <span className="hidden sm:inline">Connect Spotify</span>
                <span className="text-sm">🎵</span>
              </button>
            </form>
          )}

          {/* MOBILE MENU TOGGLE (Checkbox Hack dla zachowania Server Component) */}
          <label htmlFor="mobile-menu" className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 cursor-pointer bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
            <input type="checkbox" id="mobile-menu" className="peer hidden" />
            <div className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all peer-checked:rotate-45 peer-checked:translate-y-2" />
            <div className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all peer-checked:opacity-0" />
            <div className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-2" />
            
            {/* FULL SCREEN MOBILE OVERLAY */}
            <div className="fixed inset-0 -z-10 h-screen w-screen translate-x-full bg-zinc-950 p-8 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] peer-checked:translate-x-0">
               <div className="flex h-full flex-col justify-center gap-8">
                  <p className="font-mono text-[10px] text-[#1DB954] uppercase tracking-[0.5em]">Navigation</p>
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-6xl font-black italic uppercase tracking-tighter text-white hover:text-[#1DB954] transition-colors"
                      // Tutaj w prawdziwym Next.js warto dodać JS do zamykania menu po kliknięciu
                    >
                      {label}.
                    </Link>
                  ))}
                  
                  <div className="mt-20 flex justify-between items-end border-t border-white/10 pt-10">
                     <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
                        © 2024 Zounk <br/> Music Tech Analytics
                     </div>
                     {session && (
                        <form action={async () => { "use server"; await signOut(); }}>
                           <button type="submit" className="text-red-500 font-black uppercase italic tracking-tighter text-2xl">Logout —&gt;</button>
                        </form>
                     )}
                  </div>
               </div>
               
               {/* Background Watermark w menu mobilnym */}
               <div className="absolute bottom-10 right-[-20%] text-[20rem] font-black italic text-white/[0.02] pointer-events-none select-none">
                  MENU
               </div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}