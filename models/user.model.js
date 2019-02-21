const Sequelize = require('sequelize');
const db = require('../config/db.js');

const UserModel = db.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    }
});

module.exports = UserModel;
