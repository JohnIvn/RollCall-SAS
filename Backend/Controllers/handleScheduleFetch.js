import Room1 from "../Models/room1Model.js";
import Room2 from "../Models/room2Model.js";
import Room3 from "../Models/room3Model.js";
import Room4 from "../Models/room4Model.js";
import { teacherAccount } from "../Models/teacherAccountModel.js";
import jwt from "jsonwebtoken";

export async function handlefetchSchedule(ws, data) {
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
    if (!token) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Token missing",
        })
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Invalid token",
        })
      );
    }

    const teacherId = decoded.teacherId;
    console.log("Extracted teacherId:", teacherId);

    if (!teacherId) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher ID is required" })
      );
    }

    const teacher = await teacherAccount.findOne({
      where: { userId: teacherId },
      attributes: ["teacherNumber"],
    });

    if (!teacher) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher not found" })
      );
    }

    const schedule = await Room1.findAll({
      where: { teacher: teacher.teacherNumber },
      attributes: ["Subjects", "Day", "Time_In", "Time_Out"],
    });

    if (!schedule.length) {
      return ws.send(
        JSON.stringify({ type: "error", message: "No schedule found" })
      );
    }

    const formattedSchedule = schedule.map((item) => ({
      day: item.Day,
      time: `${item.Time_In} - ${item.Time_Out}`,
      subject: item.Subjects,
      status: true,
    }));

    ws.send(
      JSON.stringify({
        type: "schedule",
        schedule: formattedSchedule,
      })
    );
  } catch (error) {
    console.error("Error fetching schedule:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}

export async function handlefetchSchedule2(ws, data) {
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
    if (!token) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Token missing",
        })
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Invalid token",
        })
      );
    }

    const teacherId = decoded.teacherId;
    console.log("Extracted teacherId:", teacherId);

    if (!teacherId) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher ID is required" })
      );
    }

    const teacher = await teacherAccount.findOne({
      where: { userId: teacherId },
      attributes: ["teacherNumber"],
    });

    if (!teacher) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher not found" })
      );
    }

    const schedule = await Room2.findAll({
      where: { teacher: teacher.teacherNumber },
      attributes: ["Subjects", "Day", "Time_In", "Time_Out"],
    });

    if (!schedule.length) {
      return ws.send(
        JSON.stringify({ type: "error", message: "No schedule found" })
      );
    }

    const formattedSchedule = schedule.map((item) => ({
      day: item.Day,
      time: `${item.Time_In} - ${item.Time_Out}`,
      subject: item.Subjects,
      status: true,
    }));

    ws.send(
      JSON.stringify({
        type: "schedule",
        schedule: formattedSchedule,
      })
    );
  } catch (error) {
    console.error("Error fetching schedule:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}

export async function handlefetchSchedule3(ws, data) {
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
    if (!token) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Token missing",
        })
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Invalid token",
        })
      );
    }

    const teacherId = decoded.teacherId;
    console.log("Extracted teacherId:", teacherId);

    if (!teacherId) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher ID is required" })
      );
    }

    const teacher = await teacherAccount.findOne({
      where: { userId: teacherId },
      attributes: ["teacherNumber"],
    });

    if (!teacher) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher not found" })
      );
    }

    const schedule = await Room3.findAll({
      where: { teacher: teacher.teacherNumber },
      attributes: ["Subjects", "Day", "Time_In", "Time_Out"],
    });

    if (!schedule.length) {
      return ws.send(
        JSON.stringify({ type: "error", message: "No schedule found" })
      );
    }

    const formattedSchedule = schedule.map((item) => ({
      day: item.Day,
      time: `${item.Time_In} - ${item.Time_Out}`,
      subject: item.Subjects,
      status: true,
    }));

    ws.send(
      JSON.stringify({
        type: "schedule",
        schedule: formattedSchedule,
      })
    );
  } catch (error) {
    console.error("Error fetching schedule:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}

export async function handlefetchSchedule4(ws, data) {
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
    if (!token) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Token missing",
        })
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return ws.send(
        JSON.stringify({
          type: "error",
          message: "Unauthorized: Invalid token",
        })
      );
    }

    const teacherId = decoded.teacherId;
    console.log("Extracted teacherId:", teacherId);

    if (!teacherId) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher ID is required" })
      );
    }

    const teacher = await teacherAccount.findOne({
      where: { userId: teacherId },
      attributes: ["teacherNumber"],
    });

    if (!teacher) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Teacher not found" })
      );
    }

    const schedule = await Room4.findAll({
      where: { teacher: teacher.teacherNumber },
      attributes: ["Subjects", "Day", "Time_In", "Time_Out"],
    });

    if (!schedule.length) {
      return ws.send(
        JSON.stringify({ type: "error", message: "No schedule found" })
      );
    }

    const formattedSchedule = schedule.map((item) => ({
      day: item.Day,
      time: `${item.Time_In} - ${item.Time_Out}`,
      subject: item.Subjects,
      status: true,
    }));

    ws.send(
      JSON.stringify({
        type: "schedule",
        schedule: formattedSchedule,
      })
    );
  } catch (error) {
    console.error("Error fetching schedule:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}
