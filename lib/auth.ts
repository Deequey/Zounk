import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
      authorization: "https://accounts.spotify.com/authorize?scope=user-read-email,user-top-read"
    }),
  ],
  // To zapewnia poprawne działanie na różnych domenach
  trustHost: true 
})