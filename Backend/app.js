import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
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
import { startWebSocketServer } from "./Websockets/esp32Socket.js";
import { startFrontendWebsocket } from "./Websockets/frontendSocket.js";

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

    startWebSocketServer(server);
    startFrontendWebsocket(server);
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
}

initializeApp();
