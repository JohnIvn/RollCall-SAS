import Attendance from "../Models/attendanceModel.js";
import jwt from "jsonwebtoken";

export default async function handleAttendanceFetch(ws, data) {
  try {
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.error("Invalid JSON received:", data);
        return ws.send(
          JSON.stringify({ type: "error", message: "Invalid request format" })
        );
      }
    }

    const token = data?.token;
    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET);
      } catch (error) {
        return ws.send(
          JSON.stringify({
            type: "error",
            message: "Unauthorized: Invalid token",
          })
        );
      }
    }

    const subject = data?.subject;
    if (!subject) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Subject is required" })
      );
    }

    const attendanceRecords = await Attendance.findAll({
      where: { subject },
      attributes: ["Attendance_hex", "Day", "timein", "subject", "room"],
      order: [["timein", "ASC"]],
    });

    const responseData = {
      subject: subject,
      attendance: attendanceRecords.map((record) => ({
        cardNumber: record.Attendance_hex,
        day: record.Day,
        timeIn: record.timein,
        room: record.room,
      })),
      count: attendanceRecords.length,
    };

    ws.send(
      JSON.stringify({
        type: "subjectAttendance",
        data: responseData,
      })
    );
  } catch (error) {
    console.error("Error fetching subject attendance:", error);
    ws.send(
      JSON.stringify({
        type: "error",
        message: "Internal server error",
        details: error.message,
      })
    );
  }
}
