require('dotenv').config();
const fs = require('fs');
const filenv = './.env';

if (!fs.existsSync(filenv)) {
  throw Error("File .env doesn't exist");
}

module.exports = {
  development: {
    username: process.env.DB_UserName,
    password: process.env.DB_Password,
    database: process.env.DB_Database,
    host: process.env.DB_Host,
    dialect: process.env.DB_Dialect,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
