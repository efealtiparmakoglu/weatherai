const express = require('express');
const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', (req, res) => {
  res.json({
    success: true,
    profile: {
      id: '123',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      avatar: null,
      bio: '',
      createdAt: new Date()
    }
  });
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', (req, res) => {
  res.json({
    success: true,
    message: 'Profil güncellendi',
    profile: req.body
  });
});

module.exports = router;
