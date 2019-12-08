'use strict'

const Service = require("egg").Service
const svgCaptcha = require("svg-captcha")

class CaptchaService extends Service {
  // 产生验证码
  async generate() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      bacground: "#cc9966"
    })
    this.ctx.session.code = captcha.text
    return captcha
  }

  async check(identify_code) {
    if (identify_code && identify_code === this.ctx.session.code) {
      return true
    }
    return false
  }
}

module.exports = CaptchaService
