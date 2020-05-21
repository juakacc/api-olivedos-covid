"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("olivedos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      suspect: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      discarded: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      confirmed: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      monitored: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      deaths: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("olivedos");
  },
};
