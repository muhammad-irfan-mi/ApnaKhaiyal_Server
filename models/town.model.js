const mongoose = require("mongoose");

const phaseSchema = new mongoose.Schema({
  name: String,
  plots: Number,
  shops: Number,
  images: [String],
  video: String,
});

const townSchema = new mongoose.Schema({
  name: String,
  area: String,
  locationMap: String,
  address: String,
  city: String,
  nocRegistry: String,
  documents: [String],
  phases: [phaseSchema],
});

module.exports = mongoose.model("Town", townSchema);
