"use strict";

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CookeSchema = new Schema(
    {
      name: { type: String },
      img: { type: String },
      step: { type: String },
    }
  );

  return mongoose.model('Cook', CookeSchema);
};
