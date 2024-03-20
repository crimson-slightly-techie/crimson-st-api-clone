const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const studentSchema = new Schema ({

  firstName: {
    type: String,
    required: [true, 'firstname is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,

  },
  gender: {
    type: String,
    required: true,
    enum: ['male','female']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,

  },
  password: {
    type: String,
    required: true,
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
    }
  },
},
{timestamps: true}
)


const Student = mongoose.model('Student', studentSchema)