const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
    // defino el modelo
    sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        cca3: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flags: {
            type: DataTypes.STRING,
            allowNull: false
        },
        continents: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subregion: {
            type: DataTypes.STRING
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};
