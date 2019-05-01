import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import { RoutesInterface } from "../interface/RoutesInterface";
import LoggerService from "./LoggerService";

export default class RouteService {
    public static routesDir: string = "";
    public static app: express.Application = null;

    public static buildRoutes(app: express.Application, rootDir: string): void {
        this.routesDir = path.join(rootDir, "/build/routes");
        this.app = app;

        fs.readdir(this.routesDir, (err, files) => {
            if (err) {
                return LoggerService.handleError(`Unable to scan directory: ${err}`);
            }

            this.loadRoutes(files);
        });
    }

    public static loadRoutes(files: string[]): void {
        files.filter((fileName: string) => !fileName.includes(".js.map"))
            .map((fileName: string) => require(`../routes/${fileName}`).default)
            .sort((objA: RoutesInterface, objB: RoutesInterface) => objA.loadOrder - objB.loadOrder)
            .map((route: RoutesInterface) => route.register(this.app));
    }
}
