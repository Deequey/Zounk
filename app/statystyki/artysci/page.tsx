import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Header } from "@/app/Header";
import { getSpotifyUserAndToken, getTopArtists } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export default async function TopArtysciPage() {
  const userAndToken = await getSpotifyUserAndToken();
  if (!userAndToken) redirect("/login");

  const artists = await getTopArtists(userAndToken.token);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            ← Strona główna
          </Link>
          <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Top artyści
          </h1>
          <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
            Ostatnie 4 tygodnie
          </p>

          {artists.length === 0 ? (
            <p className="text-zinc-500 dark:text-zinc-400">
              Słuchaj więcej na Spotify, żeby zobaczyć swoich top artystów.
            </p>
          ) : (
            <ul className="space-y-3">
              {artists.map((artist, i) => (
                <li
                  key={artist.id}
                  className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span className="flex w-8 shrink-0 justify-center text-sm font-bold text-zinc-400">
                    {i + 1}
                  </span>
                  {artist.images[0]?.url && (
                    <Image
                      src={artist.images[0].url}
                      alt=""
                      width={56}
                      height={56}
                      className="size-14 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {artist.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
