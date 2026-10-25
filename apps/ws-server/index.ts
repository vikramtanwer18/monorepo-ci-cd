import { WebSocketServer } from "ws";
import { db } from "@repo/db";

const port = Number(process.env.PORT ?? 3001);
const server = new WebSocketServer({ port });

server.on("connection", async (socket) => {
  try {
    await db.orm.public.User.create({
      username: Math.random().toString(),
      email: Math.random().toString(),
    });
  } catch (err) {
    // An unhandled rejection here would crash the whole server.
    console.error(err);
  }
  socket.send("Hi there you are connected to the server");
});

console.log(`ws-server listening on ws://localhost:${port}`);
