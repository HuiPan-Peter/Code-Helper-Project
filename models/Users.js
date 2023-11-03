const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    verifyPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
      }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 16],
                isAlphanumeric: true,
            },
        },
        administrator: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        // TODO: look into arrays
        // expertises: {

        // }
    }
);