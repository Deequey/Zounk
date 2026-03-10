import Link from "next/link";
import { headers } from "next/headers";

const SPOTIFY_AUTH_URL = "/api/auth/spotify";

const ERROR_MSG: Record<string, string> = {
  access_denied: "Anulowano logowanie w Spotify.",
  invalid_request: "Błąd żądania. Sprawdź, czy w Spotify Dashboard w Redirect URIs jest dokładnie adres tej strony + /api/auth/spotify/callback (np. https://twoja-domena.vercel.app/api/auth/spotify/callback).",
  no_code: "Spotify nie przekazało kodu. Spróbuj ponownie.",
  token_exchange_failed: "Nie udało się wymienić kodu na token. Sprawdź SPOTIFY_REDIRECT_URI w Vercel – musi być dokładnie ten sam adres co w Spotify Dashboard.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const errorMsg = error ? (ERROR_MSG[error] ?? `Błąd: ${error}`) : null;
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host") ?? "";
  const proto = headersList.get("x-forwarded-proto") ?? "https";
  const redirectUri = host ? `${proto}://${host}/api/auth/spotify/callback` : "";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl backdrop-blur">
        <h1 className="mb-2 text-center text-2xl font-bold text-white">
          Zaloguj się
        </h1>
        <p className="mb-6 text-center text-sm text-zinc-400">
          Połącz konto Spotify, aby kontynuować
        </p>

        {errorMsg && (
          <div className="mb-6 rounded-lg border border-red-500/50 bg-red-950/50 px-4 py-3 text-sm text-red-200">
            {errorMsg}
          </div>
        )}

        <a
          href={SPOTIFY_AUTH_URL}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1DB954] px-6 py-4 font-semibold text-white transition-all hover:bg-[#1ed760] active:scale-[0.98]"
        >
          <SpotifyIcon className="h-6 w-6" />
          Zaloguj przez Spotify
        </a>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Przekierujemy Cię do Spotify w celu autoryzacji.
        </p>
        {redirectUri && (
          <p className="mt-3 text-center text-xs text-zinc-600">
            W Spotify Dashboard → Redirect URIs wklej dokładnie:{" "}
            <strong className="break-all">{redirectUri}</strong>
            {" "}W Vercel (env) ustaw SPOTIFY_REDIRECT_URI na ten sam adres.
          </p>
        )}

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-zinc-400 underline hover:text-zinc-300"
        >
          ← Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
