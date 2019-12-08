"use strict"

const Service = require("egg").Service

class UserService extends Service {
  async find(user) {
    const result = await this.ctx.model.User.find(user)
    console.log(result)
    return result
  }
  async findUser() {
    const result = await this.ctx.model.User.find({})
    return result
  }
  async save(user) {
    const userQ = await this.find({ username: user.username })
    if (userQ) {
      return false
    }
    const User = new this.ctx.model.User(user);
    User.save();
    return true;
  }

  async loginAndGetUser(username, password) {
    const user = await this.ctx.model.User.find({ username })
    if (!user || user.password !== password) {
      return false
    } else {
      return user
    }
  }
}
module.exports = UserService
