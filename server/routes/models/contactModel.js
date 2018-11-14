const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  occupation: String,
  avatar: String
});

module.exports = mongoose.model("contacts", ContactSchema);