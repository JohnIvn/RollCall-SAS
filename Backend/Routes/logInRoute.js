import { handleLogin } from "../Controllers/loginController.js";
import { handlefetch, handlefetchStudent } from "../Controllers/handleFetch.js";
import handleTeacherFetch from "../Controllers/handleTeacherFetch.js";
import {
  handlefetchSchedule,
  handlefetchSchedule2,
  handlefetchSchedule3,
  handlefetchSchedule4,
} from "../Controllers/handleScheduleFetch.js";
import handleAttendanceFetch from "../Controllers/handleAttendanceFetch.js";

export function handleWebSocketMessage(ws, message) {
  try {
    const data = message ? JSON.parse(message) : null;

    console.log(data);

    switch (data.type) {
      case "login":
        handleLogin(ws, data);
        break;

      case "fetch_students":
        handlefetch(ws, data);
        break;

      case "fetch_banned":
        teacherlogin(ws, data);
        break;

      case "fetch_teacher":
        handleTeacherFetch(ws, data);
        break;

      case "fetch_schedule":
        handlefetchSchedule(ws, data);
        break;

      case "fetch_schedule_2":
        handlefetchSchedule2(ws, data);
        break;

      case "fetch_schedule_3":
        handlefetchSchedule3(ws, data);
        break;

      case "fetch_schedule_4":
        handlefetchSchedule4(ws, data);
        break;

      case "fetch_attendance":
        handleAttendanceFetch(ws, data);
        break;

      case "fetch_student_by_id":
        handlefetchStudent(ws, data);
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
