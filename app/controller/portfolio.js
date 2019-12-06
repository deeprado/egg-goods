'use strict';

const Controller = require('egg').Controller;

/**
 * 作品集
 */
class PortfolioController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('portfolio', data);
  }
}

module.exports = PortfolioController;
