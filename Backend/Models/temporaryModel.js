import { DataTypes, Model } from "sequelize";
import dotenv, { config } from "dotenv";
import db from "../database.js";

dotenv.config();

class temporaryModel extends Model {}

const temporary = temporaryModel.init(
  {
    temporary_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    middle_name: {
      type: DataTypes.STRING,
    }, 
    last_name: {
      type: DataTypes.STRING,
    },
    temporary_hex: {
      type: DataTypes.STRING,
    },
    Day: {
      type: DataTypes.STRING,
    },
    timein: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    teacher: {
      type: DataTypes.STRING,
    },
    room: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "temporary",
    tableName: "temporary_Table",
    timestamps: true,
  }
);

export default temporary;
