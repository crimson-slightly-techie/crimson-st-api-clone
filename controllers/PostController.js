const Post = require("../models/Post");
const slugify = require("slugify");

const PostController = {
  async storePost(req, res) {
    try {
      // Create a new post using the data in the request body
      const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
        slug: slugify(req.body.title),
        user: req.body.user,
      });

      // Save the new post to the database
      const savedPost = await newPost.save();

      // Respond with the newly created post
      res.status(201).json(savedPost);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating post", error: error.message });
    }
  },

  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts" });
    }
  },

  async getPost(req, res) {
    const post = await Post.findOne({ slug: req.params.slug }).populate(
      "comments"
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  },

  async getUserPosts(req, res) {
    const userPosts = await Post.find({ user: req.params.userId }).populate(
      "comments"
    );

    if (!userPosts.length) {
      return res.status(404).json({ message: "No posts found for this user" });
    }

    res.json(userPosts);
  },

  async deletePost(req, res) {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.user.toString() != req.params.userId) {
      return res.status(403).json({ message: "Unauthorized delete action" });
    }

    // delete post and all associated comments
    await Comment.deleteMany({ post_id: req.params.id });

    //delete post itself

    deleted = post.remove();

    if (!this.deleted) {
      return res.status(500).json({ message: "Error deleting post" });
    }

    res.json({ message: "Post and associated comments deleted successfully" });
  },

  async updatePost(req, res) {
    try {
      const { title, description, user, viewCount, likes, dislikes } = req.body;
      let updateData = { title, description, user };

      const updatedPost = await Post.findOneAndUpdate(
        { slug: req.params.slug }, // Find by slug
        { $set: updateData },
        { new: true } // Returns the updated document
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(updatedPost);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating post", error: error.message });
    }
  },
};

module.exports = PostController;
