import axios from "axios";
import { Env, WeatherResponse } from "./types";

class DarkSkyApi {
  apiToken: string;

  constructor({ env }: { env: Env }) {
    this.apiToken = env.DARKSKY_API_TOKEN;
  }

  async getWeather({ lat, lng }: { lat: number; lng: number }) {
    const { data } = await axios.get<WeatherResponse>(
      `https://api.darksky.net/forecast/${this.apiToken}/${lat},${lng}`,
      {
        params: {
          exclude: "minutely,hourly,daily,alerts,flags",
          units: "si",
        },
      }
    );

    return data;
  }
}

export default DarkSkyApi;
