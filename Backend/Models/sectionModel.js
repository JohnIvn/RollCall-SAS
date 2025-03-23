import { DataTypes, Model } from "sequelize";
import db from "../database.js";

class SectionModel extends Model {}

const Section = SectionModel.init(
  {
    Section_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
      unique: true,
    },
    section: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "sectionModel",
    tableName: "Section_Table",
    timestamps: true,
  }
);

export default Section;
