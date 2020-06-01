"use strict";
module.exports = (sequelize, DataTypes) => {
  const paraiba = sequelize.define(
    "paraiba",
    {
      date: DataTypes.DATE,
      confirmed: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  paraiba.associate = function (models) {};
  return paraiba;
};
