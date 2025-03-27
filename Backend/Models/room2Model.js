import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import Subject from "../Models/subjectsModel.js";
import Day from "../Models/dayModel.js";

class Room2Model extends Model {}

const Room2 = Room2Model.init(
  {
    Room2_id: {
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
    modelName: "Room2Model",
    tableName: "Room2_Table",
    timestamps: true,
  }
);

export default Room2;
