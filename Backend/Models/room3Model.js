import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import Subject from "../Models/subjectsModel.js";
import Day from "../Models/dayModel.js";
import { teacherAccount } from "./teacherAccountModel.js";

class room3Model extends Model {}

const room3 = room3Model.init(
  {
    room3_id: {
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
    teacher: {
      type: DataTypes.STRING,
      references: {
        model: teacherAccount,
        key: "teacherNumber",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
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
    modelName: "room3Model",
    tableName: "room3_Table",
    timestamps: true,
  }
);

room3Model.belongsTo(teacherAccount, {
  foreignKey: "teacher", 
  as: "teacherInfo",
  targetKey: "teacherNumber", 
});

export default room3;
