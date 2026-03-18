const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    
    // Validation
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanları doldurun'
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user (mock)
    const user = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      createdAt: new Date()
    };
    
    // Generate token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      success: true,
      message: 'Kayıt başarılı',
      token,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Mock user check
    if (email === 'test@example.com' && password === 'password') {
      const token = jwt.sign(
        { userId: '123' },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '7d' }
      );
      
      return res.json({
        success: true,
        token,
        user: {
          id: '123',
          email,
          firstName: 'Test',
          lastName: 'User'
        }
      });
    }
    
    res.status(401).json({
      success: false,
      message: 'Geçersiz email veya şifre'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', (req, res) => {
  res.json({
    success: true,
    user: {
      id: '123',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User'
    }
  });
});

module.exports = router;
