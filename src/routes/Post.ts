import * as express from "express";
import RoutesInterface from '../interface/RoutesInterface';
import loggerService from '../service/LoggerService';

class Post implements RoutesInterface {

    public _route: string = "/";

    public register(server: any): void {
        server.get(this._route, this._get);
        server.put(this._route, this._put);
        server.post(this._route, this._post);
        server.delete(this._route, this._delete);
    }

    private _get(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        var responseObj = {success: "GET"}
        loggerService.handleLog(JSON.stringify(responseObj));
        return res.send(responseObj);
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
