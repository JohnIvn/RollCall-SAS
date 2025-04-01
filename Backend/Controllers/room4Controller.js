import { Op } from "sequelize";
import dayjs from "dayjs";
import Test from "../Models/attendanceModel.js";
import Banned from "../Models/bannedModel.js";
import { studentAccount } from "../Models/studentAccountModel.js";
import room4 from "../Models/room4Model.js";
import { logToday } from "../Services/dayToday.js";
import { teacherAccount } from "../Models/teacherAccountModel.js";
import Temporary from "../Models/temporaryModel.js"; // Import Temporary model

let lastScannedCard = null;

export const room4Switch = async (data) => {
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

    const roomEntry = await room4.findOne({
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
    let room = "room4";

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

    // Check if the temporary table already has a row
    let temporaryRecord = await Temporary.findOne({ where: {} });

    if (temporaryRecord) {
      // Update the existing row if it exists
      temporaryRecord = await temporaryRecord.update({
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

      console.log(`Temporary record updated:`, temporaryRecord);
    } else {
      // If no record exists, create a new row
      temporaryRecord = await Temporary.create({
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

      console.log(`Temporary record inserted:`, temporaryRecord);
    }

    return newAttendance;
  } catch (error) {
    console.error("Error in room4Switch:", error);
    throw error;
  }
};

export default room4Switch;
