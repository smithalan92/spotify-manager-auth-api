import * as awilix from "awilix";
import SpotifyApi from "./lib/SpotifyApi";
import makeEnv from "./services/env";

export default async function configureContainer() {
  const container = awilix.createContainer();
  const env = makeEnv();
  container.register("env", awilix.asValue(env));

  const spotifyApi = new SpotifyApi(container.cradle);
  container.register("spotifyApi", awilix.asValue(spotifyApi));

  return container;
}
