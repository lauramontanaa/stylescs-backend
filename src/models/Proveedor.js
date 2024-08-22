// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Proveedor
const Proveedor = sequelize.define('Proveedor', {
    prove_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    prove_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prove_lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prove_address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    prove_phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    prove_email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
},
{
    tableName: 'proveedores',
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Proveedor;