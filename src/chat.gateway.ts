import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: '*' })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('read')
  handleRead(): void {
    this.server.emit('onRead');
  }

  @SubscribeMessage('message')
  handleMessage(): void {
    this.server.emit('onMessage');
  }
}
