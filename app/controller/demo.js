'use strict';

const Controller = require('egg').Controller;

/**
 * 示例
 */
class DemoController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.renderString("demo");
    }

    async fetch() {
        this.ctx.body = this.app.cache.get(this.ctx.query.id);
    }

    async helper() {
        const { app, ctx } = this;
        const id = ctx.query.id;
        const user = app.cache.get(id);
        ctx.body = ctx.helper.formatUser(user);
    }
}

module.exports = DemoController;
