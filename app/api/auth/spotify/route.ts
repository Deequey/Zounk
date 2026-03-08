import { NextResponse } from "next/server";

const SPOTIFY_AUTH_BASE = "https://accounts.spotify.com/authorize";

const SCOPES = [
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-top-read",
  "user-read-recently-played",
].join(" ");

export function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      {
        error: "Brak konfiguracji Spotify (SPOTIFY_CLIENT_ID / SPOTIFY_REDIRECT_URI)",
      },
      { status: 500 }
    );
  }

  const state = crypto.randomUUID();
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: SCOPES,
    state,
    show_dialog: "false",
  });

  const url = `${SPOTIFY_AUTH_BASE}?${params.toString()}`;
  return NextResponse.redirect(url);
}
