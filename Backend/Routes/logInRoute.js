import { handleLogin } from "../Controllers/loginController.js";

export function handleWebSocketMessage(ws, message) {
  try {
    const data = JSON.parse(message);

    switch (data.type) {
      case "login":
        handleLogin(ws, data);
        break;
      default:
        ws.send(
          JSON.stringify({ type: "error", message: "Invalid request type" })
        );
    }
  } catch (error) {
    console.error("Error processing message:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}
