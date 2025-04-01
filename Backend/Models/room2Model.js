import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import Subject from "../Models/subjectsModel.js";
import Day from "../Models/dayModel.js";
import { teacherAccount } from "./teacherAccountModel.js";

class room2Model extends Model {}

const room2 = room2Model.init(
  {
    room2_id: {
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
    modelName: "room2Model",
    tableName: "room2_Table",
    timestamps: true,
  }
);

room2Model.belongsTo(teacherAccount, {
  foreignKey: "teacher", 
  as: "teacherInfo",
  targetKey: "teacherNumber", 
});

export default room2;
