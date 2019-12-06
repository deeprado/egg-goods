'use strict';

const Controller = require('egg').Controller;

/**
 * 联系
 */
class ContactController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('contact', data);
  }
}

module.exports = ContactController;
