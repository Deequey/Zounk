// components/Nav.tsx
import Link from "next/link";
import { auth, signIn, signOut } from "@/lib/auth"; // Importujemy logikę z lib/auth.ts

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
];

// Zmieniamy funkcję na 'async'
export async function Nav() {
  const session = await auth(); // Pobieramy sesję na serwerze

  return (
    <nav className="border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        
        {/* Lewa strona: Linki */}
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Prawa strona: Logowanie / Profil */}
        <div className="flex items-center gap-4">
          {session ? (
            // Jeśli użytkownik jest zalogowany
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <img 
                  src={session.user.image} 
                  alt="Avatar" 
                  className="h-7 w-7 rounded-full border border-zinc-200 dark:border-zinc-700" 
                />
              )}
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {session.user?.name}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button 
                  type="submit"
                  className="text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Wyloguj
                </button>
              </form>
            </div>
          ) : (
            // Jeśli użytkownik jest niezalogowany
            <form
              action={async () => {
                "use server";
                await signIn("spotify");
              }}
            >
              <button 
                type="submit"
                className="rounded-full bg-[#1DB954] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#1ed760] transition-colors"
              >
                Zaloguj przez Spotify
              </button>
            </form>
          )}
        </div>

      </div>
    </nav>
  );
}