import { WebSocketServer } from "ws";
import bcrypt from "bcrypt";
import {teacherAccount} from "../Models/teacherAccountModel.js";

const WS_PORT = process.env.WS_FRONTEND_PORT;

export function startFrontendWebsocket() {
  const wss = new WebSocketServer({ port: WS_PORT });

  wss.on("connection", (ws) => {
    console.log("(Frontend) New WebSocket connection established.");

    ws.on("message", async (message) => {
      try {
        const data = JSON.parse(message);

        if (data.type === "login") {
          const { email, password } = data;

          const teacher = await teacherAccount.findOne({ where: { email } });

          if (!teacher) {
            ws.send(
              JSON.stringify({
                type: "error",
                message: "Invalid email or password",
              })
            );
            return;
          }

          const isMatch = await bcrypt.compare(password, teacher.password);

          if (isMatch) {
            ws.send(
              JSON.stringify({
                type: "success",
                message: "Login successful",
                user: teacher,
              })
            );
          } else {
            ws.send(
              JSON.stringify({
                type: "error",
                message: "Invalid email or password",
              })
            );
          }
        }
      } catch (error) {
        console.error("Error processing message:", error);
        ws.send(
          JSON.stringify({ type: "error", message: "Internal server error" })
        );
      }
    });

    ws.on("close", () => {
      console.log("(Frontend) WebSocket connection closed.");
    });
  });

  console.log(`(Frontend) WebSocket server started on port ${WS_PORT}`);
}
