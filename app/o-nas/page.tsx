import Link from "next/link";
import { Nav } from "../components/Nav";

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          O nas
        </h1>
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          Tu możesz opisać projekt, zespół lub cokolwiek innego.
        </p>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← Wróć na stronę główną
        </Link>
      </main>
    </div>
  );
}
