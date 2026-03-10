import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Origin z requestu (na Vercelu musi być ta sama domena)
  const origin = request.nextUrl.origin;
  const res = NextResponse.redirect(new URL("/", origin));

  // Czyścimy ciasteczka w tej samej odpowiedzi co redirect (opcje jak przy ustawianiu)
  const isProd = process.env.NODE_ENV === "production";
  const clearOpts = { path: "/", maxAge: 0, sameSite: "lax" as const, secure: isProd };
  res.cookies.set("spotify_access_token", "", clearOpts);
  res.cookies.set("spotify_refresh_token", "", clearOpts);

  return res;
}
