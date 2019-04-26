import LogInterface from "../interface/LogInterface";

class Log implements LogInterface {

    public message: string = "";
    public time: number = 0;

    constructor(message: string) {
        this.time = new Date().getTime();
        this.setMessage(message);
    }

    public setMessage(message: string) {
        this.message = `${this.time} ${message}`;
    }
}

export default Log;