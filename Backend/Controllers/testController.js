import Test from "../Models/testModel.js";
import Banned from "../Models/bannedModel.js";

export const saveTestData = async (data) => {
  try {
    const cleanedData = data.replace(/^Card Scanned:\s*/, "");

    const bannedEntry = await Banned.findOne({
      where: { Banned_hex: cleanedData },
    });

    if (bannedEntry) {
      console.log(`Banned card detected: ${cleanedData}. Data not saved.`);
      return null;
    }

    const newTest = await Test.create({ test_hex: cleanedData });
    console.log("Data saved:", newTest);
    return newTest;
  } catch (error) {
    console.error("Error saving test data:", error);
  }
};
