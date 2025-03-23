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
} from "./Services/tableCreate.js";
import {
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
  insertCourseIfNotExist,
} from "./Services/valueInserter.js";
import { insertTeacherIfNotExist } from "./Services/userInserter.js";

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

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();
    await insertCourseIfNotExist();
    await insertTeacherIfNotExist();

    const server = app.listen(process.env.WS_PORT, () => {
      console.log(`App is listening on port: ${process.env.WS_PORT}`);
    });

    const wss = new WebSocketServer({ server });

    wss.on("connection", (ws) => {
      console.log("New WebSocket connection established.");

      ws.on("message", (message) => {
        console.log("Received:", message.toString());
        ws.send(`Server received: ${message}`);
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
