import { ChatServer } from './chat-server';

let chatServer = new ChatServer();
let app = chatServer.getApp();

export { app };