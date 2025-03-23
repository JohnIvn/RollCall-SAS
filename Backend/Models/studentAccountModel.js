import db from "../database.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import dotenv from "dotenv";
import Section from "./sectionModel.js";
import Course from "./courseModel.js";

dotenv.config();

class userStudentAccountModel extends Model {}

const userStudentAccount = userStudentAccountModel.init(
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

class SignInModel extends Model {}

SignInModel.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: process.env.DEFAULT_USER_ROLE,
    },
  },
  {
    sequelize: db,
    modelName: "SignInModel",
    tableName: "Student_Accounts",
    timestamps: true,
  }
);

class AdminAccountModel extends Model {}

const AdminAccount = AdminAccountModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: userStudentAccount,
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
    modelName: "AdminAccount",
    tableName: "student_admin_accounts",
    timestamps: true,
  }
);

export { userStudentAccount, SignInModel, AdminAccount };
