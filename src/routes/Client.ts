import * as express from "express";
import * as path from "path";
import RoutesInterface from "../interface/RoutesInterface";

class Post implements RoutesInterface {

    public route: string = "*";

    public register(server: any): void {
        server.get(this.route, this._get);
    }

    private _get(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.sendFile(path.join(__dirname, "../../src/views/index.html"));
    }
}

export default new Post();
