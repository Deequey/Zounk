"use client";

import { useRouter } from "next/navigation";

export function JoinButton({ roomId }: { roomId: string }) {
  const router = useRouter();
  async function handleJoin() {
    const res = await fetch(`/api/bitwa/${roomId}/join`, { method: "POST" });
    if (res.ok) router.refresh();
    else {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Nie udało się dołączyć");
    }
  }
  return (
    <button
      type="button"
      onClick={handleJoin}
      className="w-full rounded-xl bg-[#1DB954] px-6 py-4 font-semibold text-white transition hover:bg-[#1ed760]"
    >
      Dołącz do bitwy
    </button>
  );
}

export function CopyLinkButton({ roomId }: { roomId: string }) {
  function handleCopy() {
    const url = typeof window !== "undefined" ? `${window.location.origin}/bitwa/${roomId}` : "";
    navigator.clipboard.writeText(url);
    alert("Link skopiowany do schowka!");
  }
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
    >
      Kopiuj link
    </button>
  );
}
