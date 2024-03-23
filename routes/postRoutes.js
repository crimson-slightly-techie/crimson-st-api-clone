const express = require('express');
const postRouter = express.Router();
const multer = require('multer');


const {post} = require('../controllers/postController');
const { picUpload,imagePostSize } = require('../middleware/picUpload');

postRouter.post("/post",picUpload.single("image"),imagePostSize,post)

module.exports = postRouter