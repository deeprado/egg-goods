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

  async four() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('portfolio4', data);
  }

  async single() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('portfolio-single', data);
  }
}

module.exports = PortfolioController;
