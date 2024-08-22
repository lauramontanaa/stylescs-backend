const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo Contact
const Contact = sequelize.define('Contact', {
    con_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    con_phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    con_email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    per_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Person',
            key: 'per_id'
        }
    },
},
{
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = Contact;