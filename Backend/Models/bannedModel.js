import { DataTypes, Model } from "sequelize";
import db from "../database.js";

class bannedModel extends Model {}

const Banned = bannedModel.init(
  {
    Banned_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Banned_hex: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "bannedModel",
    tableName: "Banned_Table",
    timestamps: true,
  }
);

export default Banned;
