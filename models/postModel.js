const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_image: {
        img_url: {
            type: String,
        },
        public_id: {
            type: String,
        },
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
