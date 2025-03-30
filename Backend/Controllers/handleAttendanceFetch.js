import Room1 from "../Models/room1Model.js";
import Attendance from "../Models/attendanceModel.js";
import jwt from "jsonwebtoken";

export default async function handleAttendanceFetch(ws, data) {
  try {
    console.log("Raw received data:", data);

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

    const schedule = await Room1.findAll({
      where: { Subjects: subject },
      attributes: ["Subjects", "Day", "Time_In", "Time_Out", "room"],
    });

    if (!schedule.length) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "No schedule found for this subject",
        })
      );
    }

    const attendanceRecords = await Attendance.findAll({
      where: { subject },
      include: [
        {
          model: studentAccount,
          attributes: ["firstName", "lastName", "cardNumber"],
        },
      ],
      attributes: ["Attendance_hex", "Day", "timein", "subject", "room"],
    });

    const responseData = {
      schedule: schedule.map((item) => ({
        subject: item.Subjects,
        day: item.Day,
        time: `${item.Time_In} - ${item.Time_Out}`,
        room: item.room,
      })),
      attendance: attendanceRecords.map((record) => ({
        studentName: `${record.studentAccount?.firstName} ${record.studentAccount?.lastName}`,
        cardNumber: record.Attendance_hex,
        day: record.Day,
        timeIn: record.timein,
        subject: record.subject,
        room: record.room,
      })),
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
      })
    );
  }
}
