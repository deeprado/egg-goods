'use strict';

const Controller = require('egg').Controller;

/**
 * 首页
 */
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };

    await ctx.render('home', data);
  }
}

module.exports = HomeController;
