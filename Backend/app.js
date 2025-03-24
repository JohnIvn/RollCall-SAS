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
  createTableTestTable,
  createTableBannedTable,
  createTableRoom1Table,
} from "./Services/tableCreate.js";
import {
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
  insertCourseIfNotExist,
  insertBannedIfNotExist,
  insertRoom1IfNotExist,
} from "./Services/valueInserter.js";
import {
  insertTeacherIfNotExist,
  insertStudentIfNotExist,
} from "./Services/userInserter.js";
import { saveTestData } from "./Controllers/testController.js";

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
    await createTableTestTable();
    await createTableBannedTable();
    await createTableRoom1Table();

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();
    await insertCourseIfNotExist();
    await insertTeacherIfNotExist();
    await insertStudentIfNotExist();
    await insertBannedIfNotExist();
    await insertRoom1IfNotExist();

    const server = app.listen(process.env.WS_PORT, () => {
      console.log(`App is listening on port: ${process.env.WS_PORT}`);
    });

    const wss = new WebSocketServer({ server });

    wss.on("connection", (ws) => {
      console.log("New WebSocket connection established.");

      ws.on("message", async (message) => {
        const receivedData = message.toString();
        console.log("Received:", receivedData);

        const savedData = await saveTestData(receivedData);

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
