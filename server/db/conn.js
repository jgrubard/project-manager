const Sequelize = require('sequelize');

const localDb = 'postgres://localhost/project_manager_db';
const database = process.env.DATABASE_URL || localDb;
const noLogging = { logging: false }

const conn = new Sequelize(database, noLogging);

module.exports = conn;