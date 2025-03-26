import { WebSocketServer } from "ws";
import { handleWebSocketMessage } from "../Routes/logInRoute.js";

const WS_PORT = process.env.WS_FRONTEND_PORT;

export function startFrontendWebsocket() {
  const wss = new WebSocketServer({ port: WS_PORT });

  wss.on("connection", (ws) => {
    console.log("(Frontend) New WebSocket connection established.");

    ws.on("message", (message) => handleWebSocketMessage(ws, message));

    ws.on("close", () => {
      console.log("(Frontend) WebSocket connection closed.");
    });
  });

  console.log(`(Frontend) WebSocket server started on port ${WS_PORT}`);
}
