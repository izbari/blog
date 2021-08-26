const mongoose = require("mongoose");

//mongoose
const Schema = mongoose.Schema;

//Create schema
const PhotoSchema = new Schema({
  name: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

//Crete modal
const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
