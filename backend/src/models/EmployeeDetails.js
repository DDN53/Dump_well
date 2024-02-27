const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/db.config");

const EmployeeDetails = sequelize.define(
  "EmployeeDetails",
  {
    empId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boardGrade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employeeType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employeeStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    empCostCenter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "EmployeeDetails",
    timestamps: true,
  }
);

EmployeeDetails.sync();

module.exports = EmployeeDetails;
