import { Op } from "sequelize";
import dayjs from "dayjs";
import Test from "../Models/attendanceModel.js";
import Banned from "../Models/bannedModel.js";
import { studentAccount } from "../Models/studentAccountModel.js";
import Room1 from "../Models/room1Model.js";
import { logToday } from "../Services/dayToday.js";
import { teacherAccount } from "../Models/teacherAccountModel.js";
import Temporary from "../Models/temporaryModel.js";

let lastScannedCard = null;

export const room1Switch = async (data) => {
  try {
    const cleanedData = data.replace(/^Card Scanned:\s*/, "");

    if (cleanedData === lastScannedCard) {
      console.log(
        `Consecutive duplicate scan detected for ${cleanedData}. Ignoring.`
      );
      return null;
    }

    lastScannedCard = cleanedData;

    const bannedEntry = await Banned.findOne({
      where: { Banned_hex: cleanedData },
    });

    if (bannedEntry) {
      console.log(`Banned card detected: ${cleanedData}. Data not logged.`);
      return null;
    }

    const student = await studentAccount.findOne({
      where: { cardNumber: cleanedData },
    });

    if (!student) {
      console.log("Card not registered to any student. Data not logged.");
      return null;
    }

    const { userId, first_name, middle_name, last_name } = student;

    console.log(
      `Student Identified: ${first_name} ${last_name}, User ID: ${userId}`
    );

    const currentTime = dayjs().format("HH:mm");
    const currentDay = logToday();

    console.log(`Checking schedule for ${currentDay} at ${currentTime}...`);

    const roomEntry = await Room1.findOne({
      where: {
        Day: currentDay,
        Time_In: { [Op.lte]: currentTime },
        Time_Out: { [Op.gte]: currentTime },
      },
      include: [
        {
          model: teacherAccount,
          as: "teacherInfo",
          attributes: ["teacherNumber"],
        },
      ],
    });

    let subject = roomEntry?.Subjects || null;
    let teacherNumber = roomEntry?.teacherInfo?.teacherNumber || null;
    let room = "Room1";

    console.log(
      `Current time: ${currentTime}, Assigned subject: ${
        subject || "None"
      }, Teacher: ${teacherNumber || "None"}`
    );

    const newAttendance = await Test.create({
      Attendance_hex: cleanedData,
      userId: userId,
      Day: currentDay,
      timein: currentTime,
      subject: subject,
      teacher: teacherNumber,
      room: room,
    });

    console.log(`Attendance logged successfully:`, {
      id: newAttendance.Attendance_id,
      student: `${first_name} ${last_name}`,
      subject: subject,
      teacher: teacherNumber,
      time: currentTime,
      room: room,
    });

    // Always create a new record in the temporary table
    const temporaryRecord = await Temporary.create({
      userId: userId,
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      temporary_hex: cleanedData,
      Day: currentDay,
      timein: currentTime,
      subject: subject,
      teacher: teacherNumber,
      room: room,
    });

    console.log(`New temporary record created:`, temporaryRecord);

    return newAttendance;
  } catch (error) {
    console.error("Error in room1Switch:", error);
    throw error;
  }
};
