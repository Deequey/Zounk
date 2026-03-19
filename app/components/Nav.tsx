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
    <header className="sticky top-0 z-[100] w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80 transition-all duration-300">
      {/* Container dopasowany do UltraWide (px-6 -> 2xl:px-40) */}
      <div className="mx-auto flex w-full items-center justify-between px-6 md:px-16 lg:px-24 2xl:px-40 py-4 2xl:py-6">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3 relative z-[110]">
          <div className="flex h-10 w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-2xl transition-all duration-500 overflow-hidden">
            <img src="/Zounk_Logo.png" alt="Zounk Logo" className="h-12 w-12 2xl:h-14 2xl:w-14 object-contain" />
          </div>
          <span className="text-2xl 2xl:text-3xl font-black italic uppercase tracking-tighter text-zinc-900 dark:text-zinc-100 group-hover:text-[#1DB954] transition-colors">
            Zounk.
          </span>
        </Link>

        {/* DESKTOP NAV (Center) - Większy padding na 2xl */}
        <div className="hidden lg:flex items-center bg-zinc-100 dark:bg-zinc-900 px-2 py-1.5 2xl:px-4 2xl:py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-500">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-5 2xl:px-8 py-2 text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 transition-all hover:text-[#1DB954] dark:hover:text-[#1DB954] relative group"
            >
              <span className="relative z-10">{label}</span>
              <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-0 shadow-sm" />
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: AUTH & MOBILE TOGGLE */}
        <div className="flex items-center gap-4 2xl:gap-8 relative z-[110]">
          {session ? (
            <div className="flex items-center gap-3 2xl:gap-5">
              <div className="hidden sm:flex flex-col items-end leading-none pr-3 2xl:pr-5 border-r border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-tighter text-zinc-900 dark:text-zinc-100">
                  {session.user?.name?.split(' ')[0]}
                </span>
                <span className="text-[8px] 2xl:text-[10px] font-mono text-[#1DB954] uppercase tracking-widest mt-1">Active</span>
              </div>
              
              <div className="relative group cursor-pointer">
                <img 
                  src={session.user?.image || ""} 
                  alt="Avatar" 
                  className="h-10 w-10 2xl:h-14 2xl:w-14 rounded-2xl object-cover border-2 border-transparent group-hover:border-[#1DB954] transition-all duration-500 shadow-lg" 
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 2xl:w-5 2xl:h-5 bg-[#1DB954] rounded-full border-4 border-white dark:border-zinc-950" />
              </div>

              <form action={async () => { "use server"; await signOut(); }}>
                <button type="submit" className="hidden md:flex h-10 w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 hover:bg-red-500 hover:text-white transition-all duration-300 group">
                  <span className="text-xs 2xl:text-sm group-hover:rotate-90 transition-transform">✕</span>
                </button>
              </form>
            </div>
          ) : (
            <form action={async () => { "use server"; await signIn("spotify"); }}>
              <button type="submit" className="flex items-center gap-3 rounded-2xl bg-[#1DB954] px-6 py-3 2xl:px-8 2xl:py-4 text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#1db954]/40 active:scale-95">
                <span className="hidden sm:inline">Connect Spotify</span>
                <span className="text-sm 2xl:text-base">🎵</span>
              </button>
            </form>
          )}

          {/* MOBILE MENU TOGGLE */}
          <label htmlFor="mobile-menu" className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 cursor-pointer bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
            <input type="checkbox" id="mobile-menu" className="peer hidden" />
            <div className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all peer-checked:rotate-45 peer-checked:translate-y-2" />
            <div className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all peer-checked:opacity-0" />
            <div className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-2" />
            
            {/* FULL SCREEN MOBILE OVERLAY */}
            <div className="fixed inset-0 -z-10 h-screen w-screen translate-x-full bg-zinc-950 p-8 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] peer-checked:translate-x-0 overflow-hidden">
               <div className="flex h-full flex-col justify-center gap-6 2xl:gap-8 max-w-4xl mx-auto">
                  <p className="font-mono text-[10px] text-[#1DB954] uppercase tracking-[0.5em] mb-4">Navigation</p>
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-5xl sm:text-7xl font-black italic uppercase tracking-tighter text-white hover:text-[#1DB954] transition-all hover:translate-x-4 duration-300"
                    >
                      {label}.
                    </Link>
                  ))}
                  
                  <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-10">
                     <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
                        © 2026 Zounk <br/> Music Tech Analytics
                     </div>
                     {session && (
                        <form action={async () => { "use server"; await signOut(); }}>
                           <button type="submit" className="text-red-500 font-black uppercase italic tracking-tighter text-2xl hover:translate-x-2 transition-transform">Logout —&gt;</button>
                        </form>
                     )}
                  </div>
               </div>
               
               <div className="absolute bottom-10 right-[-10%] text-[20rem] font-black italic text-white/[0.02] pointer-events-none select-none tracking-tighter uppercase">
                  MENU
               </div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}