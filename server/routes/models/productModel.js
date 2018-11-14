const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("products", ProductSchema);