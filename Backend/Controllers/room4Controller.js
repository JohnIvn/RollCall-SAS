import { Op } from "sequelize";
import dayjs from "dayjs";
import Test from "../Models/attendanceModel.js";
import Banned from "../Models/bannedModel.js";
import { studentAccount } from "../Models/studentAccountModel.js";
import Room4 from "../Models/room4Model.js";
import { logToday } from "../Services/dayToday.js";

let lastScannedCard = null;

const Room4Switch = async (data) => {
  try {
    const cleanedData = data.replace(/^Card Scanned:\s*/, "");

    if (cleanedData === lastScannedCard) {
      console.log(
        `Consecutive duplicate scan detected for ${cleanedData}. Ignoring.`
      );W
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

    const { userId, first_name, last_name } = student;

    console.log(
      `Student Identified: ${first_name} ${last_name}, User ID: ${userId}`
    );

    const currentTime = dayjs().format("HH:mm");
    const currentDay = logToday();

    console.log(`Checking schedule for ${currentDay} at ${currentTime}...`);

    const roomEntry = await Room4.findOne({
      where: {
        Day: currentDay,
        Time_In: { [Op.lte]: currentTime },
        Time_Out: { [Op.gte]: currentTime },
      },
    });

    let subject = roomEntry ? roomEntry.Subjects : null;

    console.log(
      `Current time: ${currentTime}, Assigned subject: ${subject || "None"}`
    );

    const newTest = await Test.create({
      Attendance_hex: cleanedData,
      userId: userId,
      Day: currentDay,
      timein: currentTime,
      subject: subject,
    });

    console.log(
      `Data logged for ${cleanedData} (User ID: ${userId}):`,
      newTest
    );
    return newTest;
  } catch (error) {
    console.error("Error saving test data:", error);
  }
};

export default Room4Switch;
