import { Server } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    handleRead(): void;
    handleMessage(): void;
}
