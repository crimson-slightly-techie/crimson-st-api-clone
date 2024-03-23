const Post = require('../models/postModel')
const cloudinary = require('../utils/cloudinary')



    exports.post = async (req, res, next) => {
        try {
            // Uploading profile picture to Cloudinary
            const postImage = await cloudinary.uploader.upload(req?.file?.path, {
                folder: "post_images" 
            });
    
            
            const postInfo = await Post.create({
                // Add other psot details here
                post_image: {
                    img_url: postImage.secure_url,
                    public_id: postImage.public_id
                }
            });
    
          
            res.status(201).json({
                message: "Upload successful",
                data: postInfo,

            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    




