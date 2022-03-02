const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "node-api", // => db
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts" //=> table
);

module.exports = { PostsModel };
