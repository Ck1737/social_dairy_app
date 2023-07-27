const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const storySchema = new Schema({
  title: { type: String },
  body: { type: String },
});

const story_model = mongoose.model("Story", storySchema);

module.exports = story_model;
