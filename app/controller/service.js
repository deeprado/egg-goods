'use strict';

const Controller = require('egg').Controller;

/**
 * 服务
 */
class ServiceController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('services', data);
  }
}

module.exports = ServiceController;
