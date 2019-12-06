'use strict';

const Controller = require('egg').Controller;

/**
 * 关于
 */
class AboutController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };

    await ctx.render('about', data);
  }
}

module.exports = AboutController;
