import Hapi from "@hapi/hapi";
import AppController from "../controllers/AppController";
import AppRoutes from "../routes/AppRoutes";
import SpotifyApi from "./SpotifyApi";

export interface Env {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_CLIENT_SECRET: string;
  SPOTIFY_REDIRECT_URL: string;
  serviceName: string;
  SERVER_PORT: number;
}

export interface ContainerCradle {
  env: Env;
  appController: AppController;
  appRoutes: AppRoutes;
  spotifyApi: SpotifyApi;
}

export interface Router {
  configure: (server: Hapi.Server) => void;
}
