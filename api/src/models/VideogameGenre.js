const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "VideogameGenre",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
