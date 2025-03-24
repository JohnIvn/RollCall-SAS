import db from "../database.js";
import { DataTypes, Model } from "sequelize";
import dotenv from "dotenv";
import Section from "./sectionModel.js";
import Course from "./courseModel.js";

dotenv.config();

class studentAccountModel extends Model {}

const studentAccount = studentAccountModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    course: {
      type: DataTypes.STRING,
      references: {
        model: Course,
        key: "name",
      },
    },
    year: {
      type: DataTypes.STRING,
      references: {
        model: Section,
        key: "year",
      },
    },
    section: {
      type: DataTypes.STRING,
      references: {
        model: Section,
        key: "section",
      },
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: process.env.DEFAULT_USER_ROLE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "StudentAccounts",
    tableName: "Student_Accounts",
    timestamps: true,
  }
);

class StudentUnhashedAccountModel extends Model {}

const studentUnhashedAccount = StudentUnhashedAccountModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: studentAccount,
        key: "userId",
      },
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "StudentUnhashedAccount",
    tableName: "student_unhashed_accounts",
    timestamps: true,
  }
);

export { studentAccount, studentUnhashedAccount };
