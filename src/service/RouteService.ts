import fs = require("fs");
import * as path from "path";
import RoutesInterface from "../interface/RoutesInterface";
import LoggerService from "./LoggerService";

class RouteService {
    private routesDir: string = "";
    private server: any = null;

    public buildRoutes(server: any, rootDir: string): void {
        this.routesDir = path.join(rootDir, "/build/routes");
        this.server = server;

        this._getRoutes(server);
    }

    private _getRoutes(server: any): void {
        fs.readdir(this.routesDir, (err, files) => {
            if (err) { return LoggerService.handleError(`Unable to scan directory: ${err}`); }
            files.filter(f => !f.includes(".js.map"))
                .map((file: string) => this._registerRoute(file));
        });
    }

    private _registerRoute(file: string): void {
        const fileExport = require(`../routes/${file}`);
        const loadedModule = fileExport.default as RoutesInterface;
        loadedModule.register(this.server);
    }
}

export default new RouteService();
