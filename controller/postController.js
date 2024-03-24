
let postModel = require('../models/post');
let posts=[]


function createPost(req, res) {
    const { title } = req.body; 
    let newPost = {
        id: Math.random() * 1000,
        createdAt: new Date(),
        title,
        userId: req.body.id
    };
    
    
    if (!Array.isArray(postModel)) {
        postModel = [];
    }

    postModel.push(newPost);
    res.json(postModel);
}

function removePost(req, res) {
    const postId = parseInt(req.params.id);
    const indexToDelete = postModel.findIndex(post => post.id === postId);
    if (indexToDelete !== -1) {
        postModel.splice(indexToDelete, 1);
        res.json('Post deleted');
    } else {
        res.status(404).json('Post not found');
    }
}


function getPostsByOthers(req, res) {
    const currentUserID = req.user.id; 
    // if (!req.user || !req.user.id) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }
   
    const postsByOthers = posts.filter((postsByOthers)=> postsByOthers.userId !== currentUserID);
    res.json(postsByOthers);
}

module.exports = { createPost, removePost,getPostsByOthers };
