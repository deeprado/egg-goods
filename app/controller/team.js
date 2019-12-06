'use strict';

const Controller = require('egg').Controller;

/**
 * 团队
 */
class TeamController extends Controller {
  async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('team', data);
  }
}

module.exports = TeamController;
