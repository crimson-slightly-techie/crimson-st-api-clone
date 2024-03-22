const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const tutorSchema = new Schema ({

  firstName: {
    type: String,
    required: [true, 'firstname is required'],
    trim: true,
  },
  
  lastName: {
    type: String,
    required: [true, 'lastname is required'],
    trim: true,

  },

  gender: {
    type: String,
    required: [true, 'gender is required'],
    enum: ['male','female']
  },

  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    trim: true,

  },
  password: {
    type: String,
    required: [true, 'password is required'],
    select: false,
    trim: true,
    min: [8,'password should be at least 8 characters']

  },

  password_reset_token: String,
  password_reset_token_expiry: Date,

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,

  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  class: {
    type: String,
    required: true,
    enum: ['crimson','ivory','caramel'],
  },

  devType: {
    type: String,
    required: true,
    enum: ['frontend','backend'],
  },

  stack: {
    type: String,
    required: true,
    enum: ['nodejs','python','react'],
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  profilePic: {
    img_url: {
    type: String,
    },
    public_id: {
      type: String,
    },

  posts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    },
  ],
   
  },
},
{timestamps: true}
)


const Tutor = mongoose.model('Tutor', tutorSchema)