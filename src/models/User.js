// Importar objeto DataTypes para definir tipos de datos en Sequelize
const { DataTypes } = require('sequelize');

// Importar instancia Sequelize
const sequelize = require('../config/database');

// Modelo User
const User = sequelize.define('User', {
    use_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    use_mail: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    use_password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    use_photo: {
        type: DataTypes.STRING(255),
        defaultValue: null
    },
    use_status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Role',
            key: 'rol_id'
        }
    },
    stock_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Stockt',
            key: 'stock_id'
        }
    },
},
{
    timestamps: false // Desactiva creación automática de createdAt y updatedAt
});

// Exportar modelo
module.exports = User;