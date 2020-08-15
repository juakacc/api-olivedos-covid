module.exports = (sequelize, DataTypes) => {
  const olivedos = sequelize.define(
    'olivedos',
    {
      date: DataTypes.DATE,
      suspect: DataTypes.INTEGER,
      discarded: DataTypes.INTEGER,
      confirmed: DataTypes.INTEGER,
      monitored: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  olivedos.associate = () => {
    // associations can be defined here
  };
  return olivedos;
};
