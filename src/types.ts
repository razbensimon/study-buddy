export type ChromeMessage = {
    from: Sender;
    message: string
}

export enum Sender {
    React
}