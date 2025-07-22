const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// POST /api/project/upload
router.post('/upload', async (req, res) => {
  try {
    const {
      teamName,
      branch,
      email,
      phone,
      college,
      problemTrackId,
      projectTitle,
      pptLink
    } = req.body;

    const newProject = new Project({
      teamName,
      branch,
      email,
      phone,
      college,
      problemTrackId,
      projectTitle,
      pptLink
    });

    await newProject.save();
    res.status(201).json({ msg: 'Project uploaded successfully!' });
  } catch (error) {
    console.error('Project Upload Error:', error);
    res.status(500).json({ msg: 'Server error. Failed to upload project.' });
  }
});

module.exports = router;
