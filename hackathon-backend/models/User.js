const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  college: String,
  address: String,
  mobile: String,
  branch: String,
  batch: String,
  email: { type: String, unique: true },
  teamName: String,
  dob: String,
  password: String,
  isAdmin: { type: Boolean, default: false } 
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
