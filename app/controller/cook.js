"use strict";

const Controller = require("egg").Controller;

class CookController extends Controller {
  async list() {
    this.ctx.response.body = {
      result: await this.ctx.model.Cook.find({}, { _id: 0 });
    };
  }

  async listOne() {
    const { id } = this.ctx.params;
    this.ctx.body = {
      result: await this.ctx.model.Cook.find({ _id: id }, { _id: 0 });
    };
  }
}

module.exports = CookController;
