require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    host: process.env.LOCAL_DB,
    port: process.env.PORT_DB,
    dialect: "mysql",
    // operatorsAliases: false,
    dialectOptions: {
      bigNumberStrings: true,

      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  },
  production: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    host: process.env.LOCAL_DB,
    port: process.env.PORT_DB,
    dialect: "mysql",
    // operatorsAliases: false,
    dialectOptions: {
      bigNumberStrings: true,

      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
    // timezone: "-03:00", // for writing to database
  },
};
