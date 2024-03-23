const User = require('../models/userModel');
const cloudinary = require('../utils/cloudinary')



    exports.register = async (req, res, next) => {
        try {
            // Uploading profile picture to Cloudinary
            const profilePicPath = await cloudinary.uploader.upload(req?.file?.path, {
                folder: "profile_pictures" 
            });
    
            
            const user = await User.create({
                // Add other user details here
                profilePic: {
                    img_url: profilePicPath.secure_url,
                    public_id: profilePicPath.public_id
                }
            });
    
          
            res.status(201).json({
                message: "Registration successful",
                data: user,
                profilePicInfo: req.file
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
    




