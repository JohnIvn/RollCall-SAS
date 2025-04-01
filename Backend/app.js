import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
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
  createTableRoom3Table,
  createTableRoom4Table,
  createTableDayTable,
  createTableStudentsSubjectsTable,
  createTableTemporarySubjectsTable,
} from "./Services/tableCreate.js";
import {
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
  insertCourseIfNotExist,
  insertBannedIfNotExist,
  insertRoom1IfNotExist,
  insertRoom2IfNotExist,
  insertRoom3IfNotExist,
  insertRoom4IfNotExist,
  insertDayIfNotExist,
} from "./Services/valueInserter.js";
import {
  insertTeacherIfNotExist,
  insertStudentIfNotExist,
} from "./Services/userInserter.js";
import { startWebSocketServer } from "./Websockets/esp32Socket.js";
import { startFrontendWebsocket } from "./Websockets/frontendSocket.js";
import { logToday } from "./Services/dayToday.js";

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
    await createTableStudentsSubjectsTable();
    await createTableDayTable();
    await createTableRoom1Table();
    await createTableRoom2Table();
    await createTableRoom3Table();
    await createTableRoom4Table();
    await createTableAttendanceTable();
    await createTableBannedTable();
    await createTableTemporarySubjectsTable();

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();
    await insertCourseIfNotExist();
    await insertTeacherIfNotExist();
    await insertStudentIfNotExist();
    await insertBannedIfNotExist();
    await insertDayIfNotExist();
    await insertRoom1IfNotExist();
    await insertRoom2IfNotExist();
    await insertRoom3IfNotExist();
    await insertRoom4IfNotExist();

    console.log("Values have been inserted or checked.");

    logToday();

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
