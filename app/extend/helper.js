"use strict"

const crypto = require("crypto")
const path = require("path")
const sendToWormhole = require("stream-wormhole")
const fs = require("fs")

module.exports = {
  formatUser(user) {
    return only(user, ["name", "phone"])
  },
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow()
  },
  domain(url) {
    url && url.split("/")[2]
  },
  uuid() {
    let uuid = moment().format("YYYYMMDDHHmmssSSS");
    uuid += (Array(3).join(0) + Math.random()*100).slice(-3);
    return uuid;
  },
  saveFile(basePath, salty, stream) {
    // 生成文件名 (时间 + 盐 + 10000以内的随机数 + 文件名后缀的MD5格式hash)
    const filename =
      crypto
        .createHash("md5")
        .update(
          Date.now() +
            ":" +
            salty +
            Number.parseInt(Math.random() * 10000) +
            path.extname(stream.filename)
        )
        .digest("hex") + path.extname(stream.filename)
    const target = path.join(basePath, filename)
    // 写入流
    const writeStream = fs.createWriteStream(target)
    try {
      // 写入文件
      stream.pipe(writeStream)
    } catch (err) {
      // 必须将上传的文件流消费掉
      sendToWormhole(stream)
      throw err
    }
    return filename
  }
}
