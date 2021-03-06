"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("olivedos", "recovered", {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("olivedos", "recovered");
  },
};
