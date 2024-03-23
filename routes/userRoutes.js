const express = require('express');
const userRouter = express.Router();
const multer = require('multer');


const {register,} = require('../controllers/userController');
const { picUpload,profileSize } = require('../middleware/picUpload');

userRouter.post("/auth/register",picUpload.single("image"),profileSize,register)

module.exports = userRouter