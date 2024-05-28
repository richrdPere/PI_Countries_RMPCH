const { DataTypes } = require('sequelize');
// const {Country} = require('../models/Country.js')

module.exports = (sequelize) => {
    sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        countryUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        continent: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false });
};

