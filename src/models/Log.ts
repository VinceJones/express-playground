import { LogInterface } from "../interface/LogInterface";

export default class Log implements LogInterface {

    public time: number = this.currentTime;
    public messageType: string = "NOTICE";
    public message: string = "";

    constructor(message: string) {
        this.setMessage(message);
    }

    get currentTime() {
        return new Date().getTime();
    }

    public setMessage(message: string) {
        this.message = `<${this.messageType}> ${this.time} ${message}`;
    }
}
