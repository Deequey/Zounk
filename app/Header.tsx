import Link from "next/link";
import { getSpotifyUserAndToken } from "@/lib/spotify";

export async function Header() {
  const userAndToken = await getSpotifyUserAndToken();
  const user = userAndToken ? { name: userAndToken.name } : null;

  return (
    <header className="flex w-full items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800 sm:px-6">
      <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
        Zounk
      </Link>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Zalogowany jako{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">{user.name}</strong>
          </span>
          <Link
            href="/api/auth/logout"
            className="rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
          >
            Wyloguj
          </Link>
        </div>
      ) : (
        <Link
          href="/login"
          className="rounded-full bg-[#1DB954] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1ed760]"
        >
          Zaloguj przez Spotify
        </Link>
      )}
    </header>
  );
}
