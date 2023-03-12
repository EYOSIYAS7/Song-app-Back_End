const mongoose = require("mongoose");

// Schema is a function to create orderSchema which is an object that controls the structure of the docs
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    title: {
      type: "string",
    },
    imgUrl: {
      type: "string",
    },
    artist: {
      type: "string",
    },
    genre: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);
const songs = mongoose.model("song", songSchema);

module.exports = songs;
