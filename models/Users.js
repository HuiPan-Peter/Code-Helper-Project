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
        isAdministrator: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        // TODO: look into arrays
        expertises: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "expertise",
                key: "id"
              },
              onDelete: "CASCADE"
        }
    },
    {
        hooks:{
            beforeCreate: async (createPass) => {
              createPass.password = await bcrypt.hash(createPass.password, 10);
              return createPass;
            },
            beforeUpdate: async (updatePass) => {
              if (updatePass.password === true) {
                updatePass.password = await bcrypt.hash(updatePass.password, 10);
                return updatePass;
              } else {
                return;
              }
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);

User.hasMany(expertises);
expertises.belongsTo(User);

module.exports = User;