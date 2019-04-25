import * as path from 'path';
import fs = require('fs');
import RoutesInterface from '../interface/RoutesInterface';

class RouteService {
    private _routesDir: string = "";
    private _server: Function = null;

    public buildRoutes(server: Function, rootDir: string): void {
        this._routesDir = path.join(rootDir, "/build/routes");
        this._server = server;

        this._getRoutes(server);
    }

    private _getRoutes(server: Function): void {
        fs.readdir(this._routesDir, (err, files) => {
            if (err) return console.error("Unable to scan directory: ", err);
            files.filter(f => !f.includes(".js.map"))
                .map((file: string) => this._registerRoute(file));
        });
    }

    private _registerRoute(file: string): void {
        var fileExport = require(`../routes/${file}`);
        var loadedModule = <RoutesInterface> fileExport.default;
        loadedModule.register(this._server);
    }
}

export default new RouteService();
