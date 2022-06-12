import { Env } from "../lib/types";

export default function makeEnv() {
  return {
    ...process.env,
    SERVER_PORT: 3420,
    serviceName: "Spotify Manager Auth API",
  } as unknown as Env;
}
