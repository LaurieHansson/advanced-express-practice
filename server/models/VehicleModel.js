const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  year: String,
  make: String,
  model: String
});

// export vehices model
module.exports = mongoose.model("vehicles", VehicleSchema);