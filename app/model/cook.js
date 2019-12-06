"use strict";

module.exports = app => {
  console.log(app);
  const mongoose = app.mongoose;
  console.log(mongoose);
  const Schema = mongoose.Schema;

  const CookeSchema = new Schema(
    {
      _id: { type: Schema.Types.ObjectId },
      name: { type: String },
      img: { type: String },
      step: { type: String }
    },
    {
      versionKey: false
    }
  );

  return mongoose.model("cooks", CookeSchema);
};
