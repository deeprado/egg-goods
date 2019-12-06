'use strict';

const Controller = require('egg').Controller;

/**
 * 博客
 */
class BlogController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('blog', data);
  }

  async detail() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('blog-detail', data);
  }
}

module.exports = BlogController;
