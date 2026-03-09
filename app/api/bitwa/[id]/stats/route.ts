import { NextRequest, NextResponse } from "next/server";
import { getRoomWithTokens } from "@/lib/bitwa-store";
import { getTopArtists } from "@/lib/spotify";
import type { TopArtist } from "@/lib/spotify";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const room = getRoomWithTokens(id);
  if (!room?.user1?.token || !room.user2?.token) {
    return NextResponse.json(
      { error: "Bitwa nie jest gotowa (potrzebni 2 gracze)" },
      { status: 400 }
    );
  }
  const [artists1, artists2] = await Promise.all([
    getTopArtists(room.user1.token, 10),
    getTopArtists(room.user2.token, 10),
  ]);
  const result: {
    user1: { name: string; artists: TopArtist[] };
    user2: { name: string; artists: TopArtist[] };
  } = {
    user1: { name: room.user1.name, artists: artists1 },
    user2: { name: room.user2.name, artists: artists2 },
  };
  return NextResponse.json(result);
}
