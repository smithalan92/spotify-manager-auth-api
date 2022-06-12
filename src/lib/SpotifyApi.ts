import axios from "axios";
import { Env } from "./types";

class SpotifyApi {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;

  constructor({ env }: { env: Env }) {
    this.clientId = env.SPOTIFY_CLIENT_ID;
    this.clientSecret = env.SPOTIFY_CLIENT_SECRET;
    this.redirectUrl = env.SPOTIFY_REDIRECT_URL;
  }

  async getToken({ code }: { code: string }): Promise<string> {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("redirect_uri", this.redirectUrl);
    params.append("code", code);

    const { data } = await axios.post("https://accounts.spotify.com/api/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
      },
    });

    return data.access_token;
  }
}

export default SpotifyApi;
