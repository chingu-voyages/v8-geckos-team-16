const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pwhash: { 
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  signupdate: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  groups: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Group'
    }],
    required: true
  },
  nationality: {
    type: String,
    required: true
  }
});

export default const User = mongoose.model("User", UserSchema);
