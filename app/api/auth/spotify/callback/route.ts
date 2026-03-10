import { NextRequest, NextResponse } from "next/server";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

const isProd = process.env.NODE_ENV === "production";
const cookieOpts = (maxAge: number) => ({
  httpOnly: true,
  secure: isProd,
  sameSite: "lax" as const,
  path: "/",
  maxAge,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const origin = redirectUri ? new URL(redirectUri).origin : request.nextUrl.origin;

  if (error) {
    const errorUrl = new URL("/login", origin);
    errorUrl.searchParams.set("error", error);
    return NextResponse.redirect(errorUrl);
  }

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=no_code", origin));
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUriForToken = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUriForToken) {
    return NextResponse.json(
      { error: "Brak konfiguracji Spotify w .env" },
      { status: 500 }
    );
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUriForToken,
  });

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Spotify token error:", response.status, err);
    return NextResponse.redirect(
      new URL("/login?error=token_exchange_failed", origin)
    );
  }

  const data = (await response.json()) as {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    token_type: string;
  };

  const maxAge = data.expires_in;
  const res = NextResponse.redirect(new URL("/", origin));

  // Ciasteczka ustawiane na tej samej odpowiedzi co redirect (na Vercelu cookies() nie zawsze trafia do odpowiedzi)
  res.cookies.set("spotify_access_token", data.access_token, cookieOpts(maxAge));
  if (data.refresh_token) {
    res.cookies.set("spotify_refresh_token", data.refresh_token, cookieOpts(60 * 60 * 24 * 365));
  }

  return res;
}
