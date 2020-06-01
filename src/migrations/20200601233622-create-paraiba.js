"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("paraiba", {
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
      confirmed: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      active: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      recovered: {
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
    return queryInterface.dropTable("paraiba");
  },
};
