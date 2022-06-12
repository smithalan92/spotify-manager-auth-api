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
      path: "/login/{stateKey}",
      handler: this.controller.getLogin.bind(this.controller),
    });

    server.route({
      method: "POST",
      path: "/auth/token",
      handler: this.controller.getToken.bind(this.controller),
    });
  }
}

export default AppRoutes;
