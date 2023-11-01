const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

Class User extends Model {
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
        }
    }
)