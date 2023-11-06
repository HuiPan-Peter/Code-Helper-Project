const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expertise extends Model {};

Expertise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },
        expertises: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'expertise',
    }

);

module.exports = Expertise;