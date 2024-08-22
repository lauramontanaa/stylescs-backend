// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Rol
const Rol = sequelize.define('Rol', {
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    rol_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
},
{
    tableName: 'roles',
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Rol;