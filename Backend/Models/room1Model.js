import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import Subject from "../Models/subjectsModel.js";
import Day from "../Models/dayModel.js";

class Room1Model extends Model {}

const Room1 = Room1Model.init(
  {
    Room1_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Subjects: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
    },
    Day: {
      type: DataTypes.STRING,
      references: {
        model: Day,
        key: "Day",
      },
    },
    Time_In: {
      type: DataTypes.STRING,
    },
    Time_Out: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Room1Model",
    tableName: "Room1_Table",
    timestamps: true,
  }
);

export default Room1;
