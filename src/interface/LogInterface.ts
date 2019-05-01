export interface LogInterface {
    time: number;
    messageType: string;
    message: string;
    setMessage: (message: string) => void;
}
