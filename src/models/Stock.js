// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Stock
const Stock = sequelize.define('Stock', {
    stock_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    stock_costo: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stock_precioVenta: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stock_cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    produc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'produc_id'
        }
    },
},
{
    tableName: 'stocks',
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Stock;