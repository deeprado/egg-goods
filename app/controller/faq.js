'use strict';

const Controller = require('egg').Controller;

/**
 * 帮助
 */
class FaqController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('faq', data);
  }
}

module.exports = FaqController;
