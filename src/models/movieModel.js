const { DataTypes } = require('sequelize');
const sequelize = new require("../../config/sequelize");
const Director = require("./directorModel")


const Movie = sequelize.define('pelicula', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_estreno: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  director_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'director', 
      key: 'id' 
    }
  },
  vista: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  calificacion: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  critica: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'pelicula',
  timestamps: false
});

Movie.belongsTo(Director, { foreignKey: 'director_id', as: 'director' });

module.exports = Movie;
