const mongoose = require("mongoose");

const postSchema = require("../schemas/post_schema.js");

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
