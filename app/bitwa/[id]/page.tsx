import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/app/Header";
import { JoinButton, CopyLinkButton } from "./BitwaRoomClient";
import { getRoomPublic, getRoomWithTokens } from "@/lib/bitwa-store";
import { getSpotifyUserAndToken } from "@/lib/spotify";
import { getTopArtists } from "@/lib/spotify";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ id: string }> };

export default async function BitwaRoomPage({ params }: PageProps) {
  const { id } = await params;
  const user = await getSpotifyUserAndToken();
  if (!user) redirect("/login");

  const room = getRoomPublic(id, user.id);
  if (!room) notFound();

  // Bitwa gotowa – pobierz statystyki obu graczy
  if (room.ready) {
    const roomWithTokens = getRoomWithTokens(id);
    if (!roomWithTokens?.user1?.token || !roomWithTokens.user2?.token) {
      return <div>Błąd pokoju.</div>;
    }
    const [artists1, artists2] = await Promise.all([
      getTopArtists(roomWithTokens.user1.token, 10),
      getTopArtists(roomWithTokens.user2.token, 10),
    ]);

    return (
      <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
        <Header />
        <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
          <div className="mx-auto w-full max-w-4xl">
            <Link
              href="/bitwa"
              className="mb-6 inline-flex text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              ← Bitwa
            </Link>
            <h1 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Bitwa: {room.user1?.name} vs {room.user2?.name}
            </h1>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {room.user1?.name}
                </h2>
                <ul className="space-y-2">
                  {artists1.map((a, i) => (
                    <li
                      key={a.id}
                      className="flex items-center gap-3 rounded-lg bg-zinc-50 py-2 pr-2 dark:bg-zinc-800/50"
                    >
                      <span className="w-6 text-center text-sm font-bold text-zinc-400">
                        {i + 1}
                      </span>
                      {a.images[0]?.url && (
                        <Image
                          src={a.images[0].url}
                          alt=""
                          width={40}
                          height={40}
                          className="size-10 rounded-full object-cover"
                        />
                      )}
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {a.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {room.user2?.name}
                </h2>
                <ul className="space-y-2">
                  {artists2.map((a, i) => (
                    <li
                      key={a.id}
                      className="flex items-center gap-3 rounded-lg bg-zinc-50 py-2 pr-2 dark:bg-zinc-800/50"
                    >
                      <span className="w-6 text-center text-sm font-bold text-zinc-400">
                        {i + 1}
                      </span>
                      {a.images[0]?.url && (
                        <Image
                          src={a.images[0].url}
                          alt=""
                          width={40}
                          height={40}
                          className="size-10 rounded-full object-cover"
                        />
                      )}
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {a.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Czekasz na przeciwnika
  if (room.youInRoom) {
    return (
      <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
        <Header />
        <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
          <div className="mx-auto w-full max-w-md">
            <Link
              href="/bitwa"
              className="mb-6 inline-flex text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              ← Bitwa
            </Link>
            <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Czekasz na przeciwnika
            </h1>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              Udostępnij ten link znajomemu. Gdy wejdzie w link i dołączy do
              bitwy (musi być zalogowany na Spotify), zobaczysz porównanie.
            </p>
            <p className="mb-2 break-all rounded-lg bg-zinc-100 p-3 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              /bitwa/{id}
            </p>
            <CopyLinkButton roomId={id} />
          </div>
        </main>
      </div>
    );
  }

  // Możesz dołączyć
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
        <div className="mx-auto w-full max-w-md">
          <Link
            href="/bitwa"
            className="mb-6 inline-flex text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            ← Bitwa
          </Link>
          <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Dołącz do bitwy
          </h1>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            {room.user1 ? `W bitwie czeka już ${room.user1.name}.` : "Pokój jest pusty."}{" "}
            Kliknij poniżej, żeby dołączyć.
          </p>
          <JoinButton roomId={id} />
        </div>
      </main>
    </div>
  );
}
