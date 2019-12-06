'use strict';

const Controller = require('egg').Controller;

/**
 * 感言
 */
class TestimonialsController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('testimonials', data);
  }
}

module.exports = TestimonialsController;
