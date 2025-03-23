import { DataTypes, Model } from "sequelize";
import db from "../database.js";

class CourseModel extends Model {}

const Course = CourseModel.init(
  {
    Course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Course_code: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "CourseModel",
    tableName: "Course_Table",
    timestamps: true,
  }
);

export default Course;
