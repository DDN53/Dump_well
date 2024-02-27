const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/db.config");

const ApiUser = sequelize.define("ApiUser", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("Admin", "User", "Editor", "Viewer"),
    allowNull: true,
    defaultValue: "User",
  },
});

module.exports = ApiUser;
