// models/TeamMember.js
const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  photoUrl: String,
  linkedin: String
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', TeamMemberSchema);
