import { NextResponse } from "next/server";
import { createRoom } from "@/lib/bitwa-store";
import { getSpotifyUserAndToken } from "@/lib/spotify";

export async function POST() {
  const user = await getSpotifyUserAndToken();
  if (!user) {
    return NextResponse.json({ error: "Zaloguj się" }, { status: 401 });
  }
  const roomId = createRoom();
  return NextResponse.json({ roomId });
}
