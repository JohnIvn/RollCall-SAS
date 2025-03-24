import { DataTypes, Model } from "sequelize";
import db from "../database.js";

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
    },
    timein: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
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
