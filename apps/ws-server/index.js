"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const server = new ws_1.WebSocketServer({
    port: 3001
});
server.on("connection", (socket) => {
    client.user.create({
        data: {
            username: Math.random().toString(),
            email: Math.random().toString()
        }
    });
    socket.send("Hi there you are connected to the server");
});
