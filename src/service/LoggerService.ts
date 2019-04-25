import * as express from "express";
import LogRequest from "../models/LogRequest";
import LogInterface from "../interface/LogInterface";

class LoggerService {

    static handleRequest(req: express.Request, res: express.Response, next: express.NextFunction): void {
        LoggerService.logRequest(req);
        next();
    }

    static logRequest(req: express.Request): void {
        LoggerService.log(new LogRequest(req))
    }

    static log(log: LogInterface) {
        console.log(log.message);
    }
}

export default LoggerService;
