import { DataTypes, Model } from "sequelize";
import db from "../database.js";

class DayModel extends Model {}

const Day = DayModel.init(
  {
    Day_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Day: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "DayModel",
    tableName: "Day_Table",
    timestamps: true,
  }
);

export default Day;
