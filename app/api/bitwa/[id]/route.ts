import { NextRequest, NextResponse } from "next/server";
import { getRoomPublic } from "@/lib/bitwa-store";
import { getSpotifyUserAndToken } from "@/lib/spotify";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await getSpotifyUserAndToken();
  const room = getRoomPublic(id, user?.id);
  if (!room) {
    return NextResponse.json({ error: "Nie znaleziono bitwy" }, { status: 404 });
  }
  return NextResponse.json(room);
}
