import { teacherAccount } from "../Models/teacherAccountModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function handleTeacherFetch(ws, data) {
  try {
    const token = data.token;

    if (!token) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Unauthorized access" })
      );
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return ws.send(
          JSON.stringify({ type: "error", message: "Invalid token" })
        );
      }

      const teacher = await teacherAccount.findOne({
        where: { email: decoded.email },
      });

      if (!teacher) {
        return ws.send(
          JSON.stringify({ type: "error", message: "Teacher not found" })
        );
      }

      ws.send(
        JSON.stringify({
          type: "teacher_data",
          data: {
            name: `${teacher.first_name} ${teacher.middle_name || ""} ${
              teacher.last_name
            }`.trim(),
            course:
              teacher.role === "Professor"
                ? "Database Management"
                : "Unknown Course",
            img: null,
          },
        })
      );
    });
  } catch (error) {
    console.error("Error fetching teacher:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}

export default handleTeacherFetch;
