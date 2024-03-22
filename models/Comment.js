const mongoose = require("mongoose");

const commentSchema = require("../schemas/comment_schema.js");

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
