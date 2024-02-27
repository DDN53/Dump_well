const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/db.config");
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Admin",
  },
});

module.exports = User;
