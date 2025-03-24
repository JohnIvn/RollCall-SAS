import Test from "../Models/testModel.js";

export const saveTestData = async (data) => {
  try {
    // Remove the "Card Scanned: " prefix if it exists
    const cleanedData = data.replace(/^Card Scanned:\s*/, "");

    if (cleanedData === "3e8d402") {
      console.log("Banned card detected: 3e8d402. Data not saved.");
      return null; // Prevent saving
    }

    const newTest = await Test.create({ test_hex: cleanedData });
    console.log("Data saved:", newTest);
    return newTest;
  } catch (error) {
    console.error("Error saving test data:", error);
  }
};
