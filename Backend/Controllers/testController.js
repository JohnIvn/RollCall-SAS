import Test from "../Models/testModel.js";
import Banned from "../Models/bannedModel.js";
import { studentAccount } from "../Models/studentAccountModel.js";

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

    if (student) {
      const message = `Hello, ${student.first_name} ${student.last_name}!`;

      const newTest = await Test.create({
        test_hex: cleanedData,
        message: message,
      });

      console.log("Data logged:", newTest);
      return newTest;
    } else {
      console.log("Card not registered to any student. Data not logged.");
      return null;
    }
  } catch (error) {
    console.error("Error saving test data:", error);
  }
};
