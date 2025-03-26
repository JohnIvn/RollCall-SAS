import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import { room1Switch } from "../Controllers/room1Controller.js";
import { room2Switch } from "../Controllers/room2Controller.js";

dotenv.config();

export function startWebSocketServer(server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("(Esp32) New WebSocket connection established.");

    ws.on("message", async (message) => {
      const receivedData = message.toString();
      console.log("Received:", receivedData);

      let savedData;
      const WS_SWITCH = parseInt(process.env.WS_SWITCH, 10);
      console.log("Room switch is on Room", WS_SWITCH);

      switch (WS_SWITCH) {
        case 1:
          savedData = await room1Switch(receivedData);
          break;
        case 2:
          savedData = await room2Switch(receivedData);
          break;
        default:
          console.log("Invalid WS_SWITCH value, ignoring message.");
          ws.send("Invalid WebSocket mode.");
          return;
      }

      if (savedData) {
        ws.send(`Server received and saved: ${receivedData}`);
      } else {
        ws.send("Message was ignored due to filtering.");
      }
    });

    ws.on("close", () => {
      console.log("(Esp32) WebSocket connection closed.");
    });
  });
  return wss;
}
