"use strict"

const fs = require("fs")
const Controller = require("egg").Controller

class CookController extends Controller {
  async index() {
    const { ctx } = this
    const res = await this.service.cook.findCook()
    const data = { cooks: res }
    await ctx.render("cook", data)
  }

  async detail() {
    this.ctx.body = "hi, egg"
  }

  async create() {
    const { ctx } = this
    const data = { title: "创建厨师", csrf: this.ctx.csrf }
    await ctx.render("cook_create", data)
  }

  async add() {
    // 接收参数
    await this.service.cook.addCook()
    this.ctx.body = "cook create"
  }

  async update() {
    await this.service.cook.updateCook()
    this.ctx.body = "hi, egg"
  }

  async delete() {
    await this.service.cook.deleteCook()
    this.ctx.body = "hi, egg"
  }

  async upload() {
    const { ctx, config } = this
    // 获取 steam
    const stream = await ctx.getFileStream();
    // 上传基础目录
    const { basePath, image } = config.upload;

    // 调用helper的保存文件插件
    const filename = await ctx.helper.saveFile(
      basePath,
      image,
      stream
    )
    // 把新的图片地址返回
    ctx.body = `http://127.0.0.1:7001/uploads/${image}/${filename}`
  }
}

module.exports = CookController
