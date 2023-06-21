const mongoose = require("mongoose");
const Joi = require("joi");

const perferenceSchema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
  dress:{type:mongoose.Schema.Types.ObjectId,ref:'dress'},
  date:Date
})

exports.PerferenceModel = mongoose.model("perferences", perferenceSchema);

exports.validateArea = (_reqBody) => {
  let joiSchema = Joi.object({
    user: Joi.string().min(10).max(20).required(),
    dress: Joi.string().min(10).max(20).required(),
    date: Joi.date().required()
  })

  return joiSchema.validate(_reqBody);
}


