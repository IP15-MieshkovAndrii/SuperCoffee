const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Action = sequelize.define('actions', {
    action_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },    
    product_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    action_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});


module.exports = Action;
