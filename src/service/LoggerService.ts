import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import Log from "../models/Log";
import LogError from "../models/LogError";
import LogRequest from "../models/LogRequest";

export default class LoggerService {

    public static handleRequest(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const log = new LogRequest(req);
        LoggerService.emit(log.message);
        next();
    }

    public static handleError(message: string): void {
        const log = new LogError(message);
        LoggerService.emit(log.message);
    }

    public static handleLog(message: string): void {
        const log = new Log(message);
        LoggerService.emit(log.message);
    }

    public static emit(message: string): void {

        message = message + "\n";
        const logDir = path.join(__dirname, "../../logs/log.txt");
        const stat = fs.statSync(logDir);

        if (false === stat.isFile()) {
            fs.closeSync(fs.openSync(logDir, "w"));
        }

        fs.appendFile(logDir, message, (err: any) => {
            if (!err) {
                return;
            }

            console.error(err);
            throw err;
        });
    }
}

console.log = LoggerService.handleLog;
