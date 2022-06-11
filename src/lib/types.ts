import Hapi from "@hapi/hapi";
import { RowDataPacket, Connection } from "mysql2";
import AppController from "../controllers/AppController";
import AppRepository from "../repositories/AppRepository";
import AppRoutes from "../routes/AppRoutes";
import DarkSkyApi from "./DarkSkyApi";

export interface Env {
  MYSQL_HOST: string;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  DARKSKY_API_TOKEN: string;
  serviceName: string;
  SERVER_PORT: number;
}

export interface ContainerCradle {
  env: Env;
  db: Connection;
  appController: AppController;
  appRoutes: AppRoutes;
  appRepository: AppRepository;
  darkSkyApi: DarkSkyApi;
}

export interface Router {
  configure: (server: Hapi.Server) => void;
}

export interface Country extends RowDataPacket {
  id: number;
  name: string;
}

export interface City extends RowDataPacket {
  id: number;
  name: string;
  timezoneName: string;
}

export interface CurrentWeather {
  time: EpochTimeStamp;
  summary: string;
  icon: string;
  nearestStormDistance: number;
  nearestStormBearing: number;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: CurrentWeather;
  offset: number;
}

export interface Coordinates extends RowDataPacket {
  latitude: number;
  longitude: number;
}
