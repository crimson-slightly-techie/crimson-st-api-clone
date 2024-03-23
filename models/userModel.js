const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
 profilePic:{
    img_url:{
        type: String,
        default:'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    public_id:{
        type:String,
    },
 }
},{timestamps:true})
 
const User = mongoose.model("User",userSchema)
module.exports = User;   