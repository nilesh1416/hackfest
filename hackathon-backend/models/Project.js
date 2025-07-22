const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  problemTrackId: { type: String, required: true },
  projectTitle: { type: String, required: true },
  pptLink: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
