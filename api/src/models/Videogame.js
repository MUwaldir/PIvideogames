const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idApi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      plataformas: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknown",
      },
      imagen: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_de_lanzamiento: {
        type: DataTypes.STRING,
        defaultValue: "sin fecha",
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
