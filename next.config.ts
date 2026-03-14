import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    //@ts-ignore
    allowedDevOrigins: ["http://localhost:3000", "http://127.0.0.1:3000"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.scdn.co", pathname: "/**" },
      { protocol: "https", hostname: "mosaic.scdn.co", pathname: "/**" },
      { protocol: "https", hostname: "image-cdn-ak.spotifycdn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;