import { Env } from "../lib/types";

export default function makeEnv(): Env {
  return {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID!,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET!,
    SPOTIFY_REDIRECT_URL: process.env.SPOTIFY_REDIRECT_URL!,
    SERVER_PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3420,
    serviceName: "Spotify Auth Proxy API",
  };
}
