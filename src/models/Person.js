// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Person
const Person = sequelize.define('Person', {
    per_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    per_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    per_lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    per_address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    per_typ: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    use_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'use_id'
        }
    },
    typ_doc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Typ_Document',
            key: 'typ_doc_id'
        }
    },
},
{
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Person;
