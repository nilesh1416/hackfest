// routes/team.js
const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');


// ➕ Add member
router.post('/add', async (req, res) => {
  try {
    const newMember = new TeamMember(req.body);
    await newMember.save();
    res.status(201).json({ msg: 'Team member added successfully!' });
  } catch (err) {
    res.status(500).json({ msg: 'Error adding member', error: err });
  }
});

// 🔄 Get all members
router.get('/', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch members' });
  }
});

// ❌ Delete member
router.delete('/:id', async (req, res) => {
  try {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Member removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting member' });
  }
});

// Route that only admin can access
router.post('/add-member', verifyToken, isAdmin, (req, res) => {
  // Add team member logic
});

module.exports = router;
