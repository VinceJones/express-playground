import * as express from "express";
import * as path from 'path';
import LogRequest from "../models/LogRequest";
import LogError from "../models/LogError";
import Log from "../models/Log";

const fs = require('fs');

class LoggerService {

    static handleRequest(req: express.Request, res: express.Response, next: express.NextFunction): void {
        var log = new LogRequest(req);
        LoggerService.emit(log.message);
        next();
    }

    static handleError(message: string): void {
        var log = new LogError(message)
        LoggerService.emit(log.message);
    }

    static handleLog(message: string): void {
        var log = new Log(message)
        LoggerService.emit(log.message);
    }

    static emit(message: string): void {

        var message = message + "\n";
        var _logDir = path.join(__dirname, "../../logs/log.txt");
        var stat = fs.statSync(_logDir);

        if (false === stat.isFile()) {
            fs.closeSync(fs.openSync(_logDir, 'w'));    
        }
        
        fs.appendFile(_logDir, message, (err: any) => {
            if(err) console.error(err);
        });   
    }
}

console.log = LoggerService.handleLog;

export default LoggerService;
