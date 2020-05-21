"use strict";
module.exports = (sequelize, DataTypes) => {
  const olivedos = sequelize.define(
    "olivedos",
    {
      date: DataTypes.DATE,
      suspect: DataTypes.INTEGER,
      discarded: DataTypes.INTEGER,
      confirmed: DataTypes.INTEGER,
      monitored: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  olivedos.associate = function (models) {
    // associations can be defined here
  };
  return olivedos;
};
