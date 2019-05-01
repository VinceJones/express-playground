import * as express from "express";
import * as path from "path";
import { RoutesInterface }  from "../interface/RoutesInterface";

class Triangles implements RoutesInterface {

    public loadOrder: number = 999;
    public route: string = "/triangles";

    public register(server: any): void {
        server.get(this.route, this._get);
    }

    private _get(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.sendFile(path.join(__dirname, "../../src/views/triangles.html"));
    }
}

export default new Triangles();
