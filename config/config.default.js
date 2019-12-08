/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575350012886_5061';

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      // path.join(appInfo.baseDir, 'path/to/another'),
    ].join(','),
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
    mapping: {
      '.nj': 'nunjucks',
    },
  };
  // add your middleware config here
  config.middleware = [
    'robot',
    'gzip',
  ];
  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };
  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/goods',
      options: {
        auto_reconnect: true,
        poolSize: 10,
        useUnifiedTopology: true,
      },
    },
  };
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '0',
    },
  };
  config.sessionRedis = {
    name: '', // single redis does not need to config name
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3310',
      // 用户名
      user: 'root',
      // 密码
      password: '111111',
      // 数据库名
      database: 'cooks',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'test',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    delegate: 'mode_sequelize', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    baseDir: 'mode_sequelize', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  // add your user config here
  const userConfig = {
    myAppName: 'egg-goods',
    rememberMe: 24 * 60 * 60 * 1000, //选择记住我之后，session有效时长
    weappSDK: {
      appId: '', // your weapp appId
      appSecret: '', // weapp appSecret
    },
    upload: {
      basePath: path.join(appInfo.baseDir, 'app', 'public', 'uploads'),
      avatar: 'avatar',
      image: 'image',
      video: 'video',
      audio: 'audio',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
