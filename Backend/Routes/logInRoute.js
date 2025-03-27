
import { handleLogin } from "../Controllers/loginController.js";
import { handlefetch } from "../Controllers/handleFetch.js";

export function handleWebSocketMessage(ws, message) {
  try {
    const data = message ? JSON.parse(message) : null;

    switch (data.type) {
      case "login":
        handleLogin(ws, data);
        break;
      // case "logout":
      //   handleLogout(ws);
      //   break;

      case "fetch_students":
        handlefetch(ws,data);
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
