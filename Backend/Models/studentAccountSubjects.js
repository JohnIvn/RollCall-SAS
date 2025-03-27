import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import { studentAccount } from "./studentAccountModel.js";
import Subject from "./subjectsModel.js";
import { teacherAccount } from "./teacherAccountModel.js";

class studentSubjectsModel extends Model {}

const studentSubjects = studentSubjectsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: studentAccount,
        key: "userId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    studentNumber: {
      type: DataTypes.STRING,
      references: {
        model: studentAccount,
        key: "studentNumber",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: studentAccount,
        key: "section",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject1: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject1_attendance: {
      type: DataTypes.STRING,
    },
    subject1_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject2: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject2_attendance: {
      type: DataTypes.STRING,
    },
    subject2_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject3: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject3_attendance: {
      type: DataTypes.STRING,
    },
    subject3_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject4: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject4_attendance: {
      type: DataTypes.STRING,
    },
    subject4_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject5: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject5_attendance: {
      type: DataTypes.STRING,
    },
    subject5_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject6: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject6_attendance: {
      type: DataTypes.STRING,
    },
    subject6_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject7: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject7_attendance: {
      type: DataTypes.STRING,
    },
    subject7_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
    subject8: {
      type: DataTypes.STRING,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject8_attendance: {
      type: DataTypes.STRING,
    },
    subject8_teacher: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: teacherAccount,
        key: "userId",
      },
    },
  },
  {
    sequelize: db,
    modelName: "studentSubjectsModel",
    tableName: "Student_Account_Subjects",
    timestamps: true,
  }
);

export default studentSubjects;
