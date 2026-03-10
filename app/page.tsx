import Link from "next/link";
import { Header } from "@/app/Header";
import { getSpotifyUserAndToken } from "@/lib/spotify";
import { SpotifyIcon } from "./SpotifyIcon";

// Zawsze świeża strona – żeby cookies po logowaniu były od razu widoczne
export const dynamic = "force-dynamic";

export default async function Home() {
  const userAndToken = await getSpotifyUserAndToken();
  const user = userAndToken ? { name: userAndToken.name, id: userAndToken.id } : null;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          {user ? (
            <>
              <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span className="text-2xl" aria-hidden>✓</span>
                  <span className="font-semibold">Jesteś zalogowany</span>
                </div>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Zalogowany jako <strong className="text-zinc-900 dark:text-zinc-100">{user.name}</strong> (Spotify).
                </p>
                <Link
                  href="/api/auth/logout"
                  className="inline-flex rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
                >
                  Wyloguj się
                </Link>
              </div>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Twoje statystyki
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Ostatnie 4 tygodnie – wybierz kategorię:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    href="/bitwa"
                    prefetch={false}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                  >
                    <span className="text-3xl" aria-hidden>
                      ⚔️
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Bitwa
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Porównaj z kimś top artystów →
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/statystyki/artysci"
                    prefetch={false}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                  >
                    <span className="text-3xl" aria-hidden>
                      🎤
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Top artyści
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Zobacz listę →
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/statystyki/utwory"
                    prefetch={false}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                  >
                    <span className="text-3xl" aria-hidden>
                      🎵
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Top utwory
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Zobacz listę →
                      </p>
                    </div>
                  </Link>
                </div>
              </section>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                  Zaloguj się przez Spotify, żeby korzystać z aplikacji i zobaczyć statystyki.
                </p>
                <Link
                  href="/login"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1DB954] px-5 py-4 font-semibold text-white transition hover:bg-[#1ed760]"
                >
                  <SpotifyIcon className="h-6 w-6" />
                  Zaloguj przez Spotify
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

