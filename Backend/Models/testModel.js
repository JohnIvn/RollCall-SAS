import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import Subject from "../Models/subjectsModel.js";
import { studentAccount } from "./studentAccountModel.js";

class TestModel extends Model {}

const Test = TestModel.init(
  {
    test_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    test_hex: {
      type: DataTypes.STRING,
      references: {
        model: studentAccount,
        key: "cardNumber",
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
  },
  {
    sequelize: db,
    modelName: "TestModel",
    tableName: "Test_Table",
    timestamps: true,
  }
);

export default Test;
