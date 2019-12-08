"use strict"

const Service = require("egg").Service;

class CookService extends Service {
  async findCook() {
    const result = await this.ctx.model.Cook.find({});
    return result;
  }

  async addCook() {
    const Cook = new this.ctx.model.Cook({
      name: "aaa",
      img: "bbbb",
      step: "ccc"
    });
    Cook.save();
  }

  async updateCook() {
    const result = await this.ctx.model.Cook.updateOne(
      {
        _id: "5c00f0ce862e9227acb56d22"
      },
      {
        img: "cccccccccc"
      }
    );
    return result;
  }

  async deleteCook() {
    const result = await this.ctx.model.Cook.deleteOne({
      _id: "5c00f0ce862e9227acb56d22"
    });
    return result;
  }
}

module.exports = CookService;
