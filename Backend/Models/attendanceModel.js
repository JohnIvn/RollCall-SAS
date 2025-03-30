import { DataTypes, Model } from "sequelize";
import dotenv, { config } from "dotenv";
import db from "../database.js";
import Subject from "./subjectsModel.js";
import { studentAccount } from "./studentAccountModel.js";
import Day from "./dayModel.js";

dotenv.config();

class AttendanceModel extends Model {}

const Attendance = AttendanceModel.init(
  {
    Attendance_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: studentAccount,
        key: "userID",
      },
    },
    Attendance_hex: {
      type: DataTypes.STRING,
      references: {
        model: studentAccount,
        key: "cardNumber",
      },
    },
    Day: {
      type: DataTypes.STRING,
      references: {
        model: Day,
        key: "Day",
      },
    },
    timein: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
    },
    teacher: {
      type: DataTypes.STRING,
    },
    room: {
      type: DataTypes.STRING,
      defaultValue: process.env.WS_SWITCH,
    },
  },
  {
    sequelize: db,
    modelName: "Attendance",
    tableName: "Attendance_Table",
    timestamps: true,
  }
);

export default Attendance;
