import { Op } from "sequelize";
import dayjs from "dayjs";
import Test from "../Models/testModel.js";
import Banned from "../Models/bannedModel.js";
import { studentAccount } from "../Models/studentAccountModel.js";
import Room1 from "../Models/room1Model.js";

let lastScannedCard = null;

export const saveTestData = async (data) => {
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

    const currentTime = dayjs().format("HH:mm");

    const roomEntry = await Room1.findOne({
      where: {
        Time_In: { [Op.lte]: currentTime },
        Time_Out: { [Op.gte]: currentTime },
      },
    });

    let subject = roomEntry ? roomEntry.Subjects : null;

    console.log(
      `Current time: ${currentTime}, Assigned subject: ${subject || "None"}`
    );

    const newTest = await Test.create({
      test_hex: cleanedData,
      timein: currentTime,
      subject: subject,
    });

    console.log(`Data logged for ${cleanedData}:`, newTest);
    return newTest;
  } catch (error) {
    console.error("Error saving test data:", error);
  }
};
