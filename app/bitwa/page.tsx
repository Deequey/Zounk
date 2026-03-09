import Link from "next/link";
import { redirect } from "next/navigation";
import { Header } from "@/app/Header";
import { createRoom } from "@/lib/bitwa-store";
import { getSpotifyUserAndToken } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export default async function BitwaPage() {
  const user = await getSpotifyUserAndToken();
  if (!user) redirect("/login");

  async function createBitwa() {
    "use server";
    const u = await getSpotifyUserAndToken();
    if (!u) redirect("/login");
    const roomId = createRoom({ id: u.id, name: u.name, token: u.token });
    redirect(`/bitwa/${roomId}`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
        <div className="mx-auto w-full max-w-md">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            ← Strona główna
          </Link>
          <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Bitwa
          </h1>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            Utwórz bitwę i udostępnij link znajomemu. Gdy dołączy, zobaczycie
            porównanie waszych top artystów (ostatnie 4 tygodnie).
          </p>
          <form action={createBitwa}>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#1DB954] px-6 py-4 font-semibold text-white transition hover:bg-[#1ed760]"
            >
              Utwórz bitwę
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
