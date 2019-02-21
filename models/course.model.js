const Sequelize = require('sequelize');
const db = require('../config/db.js');

const user = db.define('user', {
    name: {
        type: Sequelize.STRING
    }
});
module.exports = user;