const mongoose = require('./connection')
const {Schema, model } = mongoose;

const hairSchema = new Schema({
  id: Number,
  name: String,
  description: String 
});

const Hair = model("Hair", hairSchema);


module.exports = Hair