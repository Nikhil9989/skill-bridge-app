const express = require('express');
const router = express.Router();

/**
 * @route   POST api/interviews
 * @desc    Submit an interview request
 * @access  Public
 */
router.post('/', (req, res) => {
  // In a real app, you would save the interview request to the database
  // and potentially send an email notification
  
  const { name, email, phone, role, city, availability, language } = req.body;
  
  // Basic validation
  if (!name || !email || !phone || !role || !city || !availability) {
    return res.status(400).json({ msg: 'Please fill all required fields' });
  }
  
  console.log('Interview request received:');
  console.log(req.body);
  
  // Send success response
  res.json({ 
    success: true, 
    message: 'Your interview request has been submitted successfully. We will contact you shortly to schedule an interview.',
    data: {
      name,
      email,
      role,
      language: language || 'english'
    }
  });
});

/**
 * @route   GET api/interviews/roles
 * @desc    Get available roles for interviews
 * @access  Public
 */
router.get('/roles', (req, res) => {
  // Mock data for available roles
  const roles = [
    { value: 'student', label: 'Student/Recent Graduate' },
    { value: 'educator', label: 'Educator/Administrator' },
    { value: 'employer', label: 'Employer/Hiring Manager' },
    { value: 'professional', label: 'Industry Professional' },
    { value: 'parent', label: 'Parent' }
  ];
  
  res.json(roles);
});

/**
 * @route   GET api/interviews/availability
 * @desc    Get available time slots for interviews
 * @access  Public
 */
router.get('/availability', (req, res) => {
  // Mock data for available time slots
  const timeSlots = [
    { value: 'weekday-morning', label: 'Weekday Mornings' },
    { value: 'weekday-afternoon', label: 'Weekday Afternoons' },
    { value: 'weekday-evening', label: 'Weekday Evenings' },
    { value: 'weekend-morning', label: 'Weekend Mornings' },
    { value: 'weekend-afternoon', label: 'Weekend Afternoons' }
  ];
  
  res.json(timeSlots);
});

/**
 * @route   GET api/interviews/languages
 * @desc    Get available languages for interviews
 * @access  Public
 */
router.get('/languages', (req, res) => {
  // Mock data for available languages
  const languages = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'kannada', label: 'Kannada' },
    { value: 'marathi', label: 'Marathi' },
    { value: 'gujarati', label: 'Gujarati' },
    { value: 'bengali', label: 'Bengali' }
  ];
  
  res.json(languages);
});

module.exports = router;
