import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { WebSocketServer } from "ws";
import createDatabaseIfNotExists from "./Services/databaseCreate.js";
import db from "./database.js";
import {
  createTableUserAccounts,
  createTableStudentUnhashedccounts,
  createTableTeacherAccounts,
  createTabletTeacherUnhashedccounts,
  createTableSectionTable,
  createTableSubjectTable,
  createTableCourseTable,
  createTableAttendanceTable,
  createTableBannedTable,
  createTableRoom1Table,
  createTableRoom2Table,
} from "./Services/tableCreate.js";
import {
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
  insertCourseIfNotExist,
  insertBannedIfNotExist,
  insertRoom1IfNotExist,
  insertRoom2IfNotExist,
} from "./Services/valueInserter.js";
import {
  insertTeacherIfNotExist,
  insertStudentIfNotExist,
} from "./Services/userInserter.js";
import { room1Switch } from "./Controllers/room1Controller.js";
import { room2Switch } from "./Controllers/room2Controller.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function initializeApp() {
  try {
    await createDatabaseIfNotExists();
    await db.authenticate();

    await createTableSectionTable();
    await createTableSubjectTable();
    await createTableCourseTable();
    await createTableUserAccounts();
    await createTableStudentUnhashedccounts();
    await createTableTeacherAccounts();
    await createTabletTeacherUnhashedccounts();
    await createTableAttendanceTable();
    await createTableBannedTable();
    await createTableRoom1Table();
    await createTableRoom2Table();

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();
    await insertCourseIfNotExist();
    await insertTeacherIfNotExist();
    await insertStudentIfNotExist();
    await insertBannedIfNotExist();
    await insertRoom1IfNotExist();
    await insertRoom2IfNotExist();

    console.log("Values have been inserted or checked.");

    const server = app.listen(process.env.WS_PORT, () => {
      console.log(`App is listening on port: ${process.env.WS_PORT}`);
    });

    const wss = new WebSocketServer({ server });

    wss.on("connection", (ws) => {
      console.log("New WebSocket connection established.");

      ws.on("message", async (message) => {
        const receivedData = message.toString();
        console.log("Received:", receivedData);

        let savedData;
        const WS_SWITCH = parseInt(process.env.WS_SWITCH, 10);
        console.log("Room switch is on Room", process.env.WS_SWITCH);

        switch (WS_SWITCH) {
          case 1:
            savedData = await room1Switch(receivedData);
            break;
          case 2:
            savedData = await room2Switch(receivedData);
            break;
          case 3:
            savedData = await room3Switch(receivedData);
            break;
          case 4:
            savedData = await room4Switch(receivedData);
            break;
          case 5:
            savedData = await room5Switch(receivedData);
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
        console.log("WebSocket connection closed.");
      });
    });
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
}

initializeApp();
