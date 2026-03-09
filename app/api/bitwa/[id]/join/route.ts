import { NextRequest, NextResponse } from "next/server";
import { joinRoom } from "@/lib/bitwa-store";
import { getSpotifyUserAndToken } from "@/lib/spotify";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await getSpotifyUserAndToken();
  if (!user) {
    return NextResponse.json({ error: "Zaloguj się" }, { status: 401 });
  }
  const result = joinRoom(id, {
    id: user.id,
    name: user.name,
    token: user.token,
  });
  if (result === "not_found") {
    return NextResponse.json({ error: "Nie znaleziono bitwy" }, { status: 404 });
  }
  if (result === "full") {
    return NextResponse.json({ error: "Bitwa jest pełna" }, { status: 400 });
  }
  return NextResponse.json({ ok: true, roomId: id });
}
