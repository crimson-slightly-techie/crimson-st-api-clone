const express = require("express");
const asyncHandler = require("express-async-handler");
const PostController = require("../controllers/PostController.js");
const validatePostCreation = require("../middlewares/StorePostMiddleware.js");

const postRoutes = express.Router();

postRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await PostController.getAllPosts(req, res);
    res.send(posts);
  })
);

postRoutes.post(
  "/",
  validatePostCreation,
  asyncHandler(async (req, res) => {
    const post = await PostController.storePost(req, res);

    res.send(post);
  })
);

// Route to get a specific post by ID
postRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const post = await PostController.getPost(req, res);

    res.send(post);
  })
);

// Route to update a post by ID
postRoutes.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const post = await PostController.updatePost(req, res);
    res.send(post);
  })
);

// Route to delete a post by ID
postRoutes.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    return await PostController.deletePost(req, res);
  })
);

module.exports = postRoutes;
