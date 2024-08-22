// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo TypDocument
const TypDocument = sequelize.define('TypDocument', {
    typ_doc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    typ_doc_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
},
{
    tableName: 'typ_document',
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = TypDocument;