import LogInterface from "../interface/LogInterface";
import * as express from "express";

class LogRequest implements LogInterface {

    public message: string = "";
    public time: number = 0;
    public headers: string = "";
    private method: string = "";
    private protocol: string = "";
    private host: string = "";
    private userAgent: string = "";
    private route: string = "";
    private cacheControl: string = "";
    private connection: string = "";

    constructor(req: express.Request) {

        this.time = new Date().getTime();
        this.headers = JSON.stringify(req.headers);
        this.method = req.method;
        this.protocol = req.protocol;
        this.host = req.headers.host;
        this.userAgent = req.headers["user-agent"];
        this.route = req.path;
        this.cacheControl = req.headers["cache-control"];
        this.connection = req.headers.connection;

        this.setMessage();
    }

    public setMessage() {
        this.message = `${this.time} ${this.method} ${this.protocol}://${this.host}${this.route} ${this.userAgent} ${this.cacheControl} ${this.connection}`;
    }
}

export default LogRequest;