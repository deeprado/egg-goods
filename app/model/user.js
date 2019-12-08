"use strict";

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema(
    {
      username: { type: String },
      password: { type: String },
      phone: { type: String },
      create_time: { type: String },
      update_time: { type: String },
      avatar_url: { type: String },
    }
  );

  return mongoose.model('User', UserSchema);
};
