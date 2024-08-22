// Importar Sequelize
const { Sequelize } = require('sequelize');

// Instancia Sequelize con parámetros de conexión DB
const sequelize = new Sequelize('stylescs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Exportar instancia
module.exports = sequelize;