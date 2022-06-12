import { Request, ResponseToolkit } from "@hapi/hapi";
import SpotifyApi from "../lib/SpotifyApi";
import { ContainerCradle, Env } from "../lib/types";
import { SPOTIFY_AUTH_SCOPES } from "../constants";

class AppController {
  spotifyApi: SpotifyApi;
  env: Env;

  constructor({ spotifyApi, env }: ContainerCradle) {
    this.spotifyApi = spotifyApi;
    this.env = env;
  }

  async getLogin(req: Request, h: ResponseToolkit) {
    const stateKey: string = req.params.stateKey;

    const qs = new URLSearchParams();
    qs.append("response_type", "code");
    qs.append("client_id", this.env.SPOTIFY_CLIENT_ID);
    qs.append("scope", SPOTIFY_AUTH_SCOPES.join(" "));
    qs.append("redirect_uri", this.env.SPOTIFY_REDIRECT_URL);
    qs.append("state", stateKey);

    h.redirect(`https://accounts.spotify.com/authorize?${qs.toString()}`);
  }

  async getToken(req: Request, h: ResponseToolkit) {
    const { code } = <{ code: string }>req.payload;

    const apiToken = await this.spotifyApi.getToken({ code });

    return {
      token: apiToken,
    };
  }
}

export default AppController;
