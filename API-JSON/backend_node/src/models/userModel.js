const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/sequelizeConfig');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{ 
    tablename: 'usuarios',
    timestamps: false,
});

module.exports = User;