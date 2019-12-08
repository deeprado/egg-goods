"use strict"
const Service = require("egg").Service
const fs = require("fs")

class UploadService extends Service {
  // async uploadAvator(avator) {
  //   const { ctx } = this
  //   // 先获取旧的文件地址，再更新数据库的图片地址，方便等一下删除
  //   const oldAvatar = await ctx.model.Admin.changeAvator(
  //     ctx.cookies.get("token", {
  //       signed: false
  //     }),
  //     `http://127.0.0.1:8089/avatar/${avator}`
  //   )
  //   // 删除旧的文件
  //   await ctx.service.upload.uploadAvatorService.deleteAvator(
  //     oldAvatar.substring(oldAvatar.lastIndexOf("/") + 1, oldAvatar.length)
  //   )
  //   return
  // }
  // async deleteAvator(avator) {
  //   fs.unlinkSync(`${pc.avator}/${avator}`)
  // }
}

module.exports = UploadService;
