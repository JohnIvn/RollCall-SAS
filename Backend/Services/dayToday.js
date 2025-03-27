import dotenv from "dotenv";

dotenv.config();

export const logToday = () => {
  console.log(`Today is ${process.env.DAY}`);
  return process.env.DAY;
};
