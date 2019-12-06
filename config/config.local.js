'use strict';

const path = require('path');
module.exports = appInfo => {
  return {
    logger: {
      dir: path.join(appInfo.baseDir, 'logs', 'local'),
    },
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'goods',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '',
    },
  };
};

