const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Category
const Category = sequelize.define('Category', {
    cate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cate_name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    cate_description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cate_medida: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
},
{
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Category;