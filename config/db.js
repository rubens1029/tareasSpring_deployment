const Sequelize = require('sequelize');
//extraer variables de entorno 
require('dotenv').config({path: '.env'})

const db = new Sequelize(process.env.BD_BASE, process.env.BD_USER, process.env.BD_PASS,   {
  host: process.env.BD_HOST, 
  dialect: 'mysql',
  port: process.env.BD_PORT,
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db; 