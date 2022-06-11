import { Server } from "@hapi/hapi";
import AppController from "../controllers/AppController";
import { Router, ContainerCradle } from "../lib/types";

class AppRoutes implements Router {
  controller: AppController;

  constructor({ appController }: ContainerCradle) {
    this.controller = appController;
  }

  configure(server: Server) {
    server.route({
      method: "GET",
      path: "/api/countries",
      handler: this.controller.getCountries.bind(this.controller),
    });

    server.route({
      method: "GET",
      path: "/api/countries/{countryId}/cities",
      handler: this.controller.getCitiesForCountry.bind(this.controller),
    });

    server.route({
      method: "GET",
      path: "/api/weather/{cityId}",
      handler: this.controller.getWeatherForCity.bind(this.controller),
    });
  }
}

export default AppRoutes;
