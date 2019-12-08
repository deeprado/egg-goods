"use strict"

const Controller = require("egg").Controller
const fs = require("mz/fs")
const path = require("path")

class UserController extends Controller {
  async auth() {
    const { ctx } = this
    const data = {}
    await ctx.render("user_auth", data)
  }
  async verify() {
    const { ctx } = this
    const captcha = await this.service.captcha.generate() // 服务里面的方法
    ctx.response.type = "image/svg+xml" // 知道你个返回的类型
    ctx.body = captcha.data // 返回一张图片
  }

  async register() {
    const { ctx } = this
    const data = {}
    await ctx.render("user_register", data)
  }
  async doregister() {
    const { ctx, config } = this
    const { username, password, phone, identify_code } = ctx.request.body
    console.log("ctx.request.body", ctx.request.body)

    const isValid = await this.service.captcha.check(identify_code)
    console.log('isValid', isValid)
    if (!isValid) {
      ctx.body = {
        successFlag: "N",
        errorMsg: "验证码错误"
      }
      return
    }
    let avatarPng = null
    if (ctx.request.files && ctx.request.files.length > 0) {
      avatarPng = ctx.request.files[0]
    }
    // 默认头像
    const { basePath, avatar } = config.upload
    let filepathNew = path.join(basePath, avatar)

    // 如果用户上传了头像
    if (avatarPng) {
      console.log("file:%j", avatarPng)
      let filenameNew =
        ctx.helper.uuid() + "." + avatarPng.filename.split(".").pop()
      filepathNew = path.join(basePath, avatar, filenameNew)
      // 把临时文件剪切到新目录去
      await fs.rename(avatar.filepath, filepathNew)
    }

    const nowTime = new Date()
    const userNew = {
      username,
      password,
      phone,
      avatar_url: filepathNew.split("\\app")[1],
      create_time: nowTime,
      update_time: nowTime,
    }
    console.log("new user: ", userNew)

    const flag = await ctx.service.user.save(userNew)
    if (flag) {
      // 设置 Session
      ctx.session.user = { username }
      ctx.cookies.set("avatarUrl", userNew.avatar_url, { httpOnly: false })
      ctx.body = {
        successFlag: "Y",
        errorMsg: "登录成功！"
      }
      ctx.redirect("/")
    } else {
      ctx.body = {
        successFlag: "N",
        errorMsg: "用户名已存在！"
      }
    }
  }

  async login() {
    const { ctx } = this
    const data = {}
    await ctx.render("user_login", data)
  }
  async dologin() {
    const { ctx, config } = this
    ctx.logger.info("req body:: %j", ctx.request.body)
    const { username, password, rememberMe,identify_code } = ctx.request.body
    console.log("ctx.request.body", ctx.request.body)

    const isValid = await this.service.captcha.check(identify_code)
    if (!isValid) {
      ctx.body = {
        successFlag: "N",
        errorMsg: "验证码错误"
      }
    }

    const user = await ctx.service.user.loginAndGetUser(username, password)
    if (!user) {
      ctx.body = {
        successFlag: "N",
        errorMsg: "用户名或密码错误！"
      }
    } else {
      // 设置 Session
      ctx.session.user = { username: user.username }
      ctx.cookies.set("avatarUrl", user.avatar_url, { httpOnly: false })
      // 如果用户勾选了 `记住我`，设置 的过期时间
      if (rememberMe) ctx.session.maxAge = this.config.rememberMe
      ctx.body = {
        successFlag: "Y",
        errorMsg: "登录成功！"
      }
      ctx.redirect("/")
    }
  }
}

module.exports = UserController
