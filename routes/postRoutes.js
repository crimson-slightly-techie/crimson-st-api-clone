const express = require('express');
const {createPost,removePost, getPostsByOthers}= require('../controller/postController');
const postRoutes = express.Router();

postRoutes.get('/posts',getPostsByOthers)
postRoutes.post('/new',createPost)
postRoutes.delete('/delete',removePost)





module.exports = postRoutes;