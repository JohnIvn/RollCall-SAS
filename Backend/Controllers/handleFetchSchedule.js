import Room1 from "../Models/room1Model.js";
import { teacherAccount } from "../Models/teacherAccountModel.js";

export const handlefetchSchedule = async (teacherId, ws) => {
  try {
    const teacher = await teacherAccount.findOne({
      where: { teacherNumber: teacherId },
    });

    if (!teacher) {
      ws.send(JSON.stringify({ type: "error", message: "Teacher not found" }));
      return;
    }

    const schedule = await Room1.findAll({
      where: { teacher: teacher.teacherNumber },
      attributes: ["Day", "Time_In", "Time_Out"],
    });

    if (schedule.length === 0) {
      ws.send(JSON.stringify({ type: "error", message: "No schedule found" }));
    } else {
      ws.send(
        JSON.stringify({
          type: "schedule_data",
          data: schedule.map((s) => ({
            day: s.Day,
            time: `${s.Time_In} to ${s.Time_Out}`,
          })),
        })
      );
    }
  } catch (error) {
    console.error("Error fetching schedule:", error);
    ws.send(JSON.stringify({ type: "error", message: "Server error" }));
  }
};

export default handlefetchSchedule;