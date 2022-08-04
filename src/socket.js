import io from "socket.io-client/dist/socket.io";
import { url, port } from "./helpers";

export default function initSocket() {
  var socket = io(`${url}:${port.socket}`, {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log(`Successfully connected to socket ${socket.id}`);
  });

  return socket;
}
