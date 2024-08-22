// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Product
const Product = sequelize.define('Product', {
    produc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    produc_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    produc_code: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    produc_description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    produc_status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    produc_size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Category',
            key: 'cate_id'
        }
    },
},
{
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Product;