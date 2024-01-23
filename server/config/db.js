const Sequelize = require("sequelize");
require('dotenv').config();

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const name = process.env.DATABASE_NAME;

const sequelize = new Sequelize(
    name,
    username,
    password,
    {
        host,
        port,
        dialect: 'mysql'
    }
);

module.exports = sequelize;