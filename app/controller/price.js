'use strict';

const Controller = require('egg').Controller;

/**
 * 价格
 */
class PriceController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('pricing', data);
  }
}

module.exports = PriceController;
