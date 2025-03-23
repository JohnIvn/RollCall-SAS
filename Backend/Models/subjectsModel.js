import { DataTypes, Model } from "sequelize";
import db from "../database.js";

class SubjectModel extends Model {}

const Subject = SubjectModel.init(
  {
    Subject_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subject_code: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "subjectModel",
    tableName: "Subject_Table",
    timestamps: true,
  }
);

export default Subject;
