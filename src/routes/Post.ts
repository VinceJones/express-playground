import * as express from "express";
import { RoutesInterface } from "../interface/RoutesInterface";

class Post implements RoutesInterface {

    public loadOrder: number = 1;
    public route: string = "/";

    public register(server: any): void {
        server.get(this.route, this._get);
        server.put(this.route, this._put);
        server.post(this.route, this._post);
        server.delete(this.route, this._delete);
    }

    private _get(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: "GET"});
    }

    private _put(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: "PUT"});
    }

    private _post(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: "POST"});
    }

    private _delete(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: "DELETE"});
    }
}

export default new Post();
