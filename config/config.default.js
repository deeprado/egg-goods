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
  ];
  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/goods',
      options: {
        server: {
          poolSize: 40,
        },
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
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'goods',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    myAppName: 'egg-goods',
    weappSDK: {
      appId: '', // your weapp appId
      appSecret: '', // weapp appSecret
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
