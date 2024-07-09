const { DataTypes } = require('sequelize');
const sequelize = require("../../config/sequelize");

const Director = sequelize.define('director', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  cantidad_peliculas: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'director',
  timestamps: false
});

module.exports = Director;
