'use strict'

module.exports = (options, app) => {
  return async function init(ctx, next) {
    // 判断前台用户是否登录   如果登录可以进入 （ 去结算  用户中心）    如果没有登录直接跳转到登录

    let userinfo = ctx.session.user

    if (userinfo && userinfo._id && userinfo.phone) {
      // 判断数据库里面有没有当前用户
      let userResutl = await ctx.model.User.find({
        username: userinfo.username
      })

      if (userResutl && userResutl.length > 0) {
        // 注意
        await next()
      } else {
        ctx.redirect("/user/login")
      }
    } else {
      ctx.redirect("/user/login")
    }
  }
}
