// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Proveedor Producto
const ProveedorProducto = sequelize.define('ProveedorProducto', {
    produc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'produc_id'
        }
    },
    prove_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Proveedor',
            key: 'prove_id'
        }
    },
},
{
    tableName: 'proveedor_producto',
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = ProveedorProducto;