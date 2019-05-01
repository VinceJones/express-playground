import * as express from "express";
import Log from "./Log";

export default class LogRequest extends Log {

    public headers: string = "";
    public body: string = "";
    private method: string = "";
    private protocol: string = "";
    private host: string = "";
    private userAgent: string = "";
    private route: string = "";
    private cacheControl: string = "";
    private connection: string = "";

    constructor(req: express.Request) {
        super("");

        this.headers = JSON.stringify(req.headers);
        this.body = JSON.stringify(req.body);
        this.method = req.method;
        this.protocol = req.protocol;
        this.host = req.headers.host;
        this.userAgent = req.headers["user-agent"];
        this.route = req.path;
        this.cacheControl = req.headers["cache-control"];
        this.connection = req.headers.connection;

        this.setMessage(this._buildMessage());
    }

    private _buildMessage() {
        const url = `${this.protocol}://${this.host}${this.route}`;
        return `${this.time} ${this.method} ${url} ${this.userAgent} ${this.cacheControl} ${this.connection}\n
            Headers: ${this.headers}\n
            Body: ${this.body}`;
    }
}
