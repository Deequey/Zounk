// components/Nav.tsx
import Link from "next/link";
import { auth, signIn, signOut } from "@/lib/auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
  { href: "/stats", label: "Stats" },
];

export async function Nav() {
  const session = await auth();

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md px-6 py-4 dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DB954] group-hover:scale-110 transition-transform duration-300">
            <span className="text-sm font-black text-black">Z</span>
          </div>
          <span className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 dark:text-zinc-100">
            Zounk
          </span>
        </Link>

        {/* Środek: Linki nawigacyjne */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative px-4 py-2 text-sm font-black uppercase tracking-tighter text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:text-[#1DB954] dark:hover:text-[#1DB954] cursor-plus"
            >
              <span className="relative z-10">
                {label}
              </span>
              
              {/* Podkreślenie przy hoverze */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1DB954] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Prawa strona: Logowanie / Profil */}
        <div className="flex items-center gap-4">
          {session ? (
            // Zalogowany użytkownik
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <div className="relative group">
                  <img 
                    src={session.user.image} 
                    alt="Avatar" 
                    className="h-8 w-8 rounded-full border-2 border-zinc-200 dark:border-zinc-700 group-hover:border-[#1DB954] transition-colors duration-300" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#1DB954] rounded-full border-2 border-white dark:border-zinc-950" />
                </div>
              )}
              <span className="hidden sm:block text-sm font-black uppercase tracking-tighter text-zinc-600 dark:text-zinc-400">
                {session.user?.name?.split(' ')[0]}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button 
                  type="submit"
                  className="group relative px-3 py-1.5 text-xs font-black uppercase tracking-tighter text-zinc-500 dark:text-zinc-400 transition-all duration-300 hover:text-red-500 dark:hover:text-red-400"
                >
                  <span className="flex items-center gap-1">
                    Wyloguj
                    <span className="opacity-0 transition-all duration-300 group-hover:opacity-100">×</span>
                  </span>
                </button>
              </form>
            </div>
          ) : (
            // Niezalogowany użytkownik
            <form
              action={async () => {
                "use server";
                await signIn("spotify");
              }}
            >
              <button 
                type="submit"
                className="group relative flex items-center gap-2 rounded-full bg-[#1DB954] px-5 py-2 text-xs font-black uppercase tracking-tighter text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1db954]/20"
              >
                <span className="text-sm">🎵</span>
                <span>Zaloguj</span>
                <span className="absolute -right-1 -top-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-xs">+</span>
                </span>
              </button>
            </form>
          )}
        </div>

      </div>
    </nav>
  );
}