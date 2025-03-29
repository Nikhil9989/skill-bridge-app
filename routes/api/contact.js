const express = require('express');
const router = express.Router();

/**
 * @route   POST api/contact
 * @desc    Submit a contact form message
 * @access  Public
 */
router.post('/', (req, res) => {
  // In a real app, you would save the contact message to the database
  // and potentially send an email notification
  
  const { name, email, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: 'Please fill all required fields' });
  }
  
  console.log('Contact form submission received:');
  console.log(req.body);
  
  // Send success response
  res.json({ 
    success: true, 
    message: 'Your message has been sent successfully. We will get back to you soon.',
    data: {
      name,
      email,
      subject
    }
  });
});

/**
 * @route   GET api/contact/info
 * @desc    Get contact information
 * @access  Public
 */
router.get('/info', (req, res) => {
  // Mock data for contact information
  const contactInfo = {
    email: 'research@skillbridge.edu',
    phone: '+91 9876543210',
    address: 'SKILL BRIDGE Research Office, Innovation Center, Pune, Maharashtra',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/skillbridge',
      twitter: 'https://twitter.com/skillbridge',
      facebook: 'https://facebook.com/skillbridge',
      instagram: 'https://instagram.com/skillbridge'
    }
  };
  
  res.json(contactInfo);
});

/**
 * @route   GET api/contact/departments
 * @desc    Get contact information for different departments
 * @access  Public
 */
router.get('/departments', (req, res) => {
  // Mock data for department contact information
  const departments = [
    {
      id: 'general',
      name: 'General Inquiries',
      description: 'Have questions about SKILL BRIDGE or our research initiatives? Our team is ready to provide the information you need.',
      email: 'info@skillbridge.edu'
    },
    {
      id: 'partnerships',
      name: 'Partnership Opportunities',
      description: 'Interested in collaborating with SKILL BRIDGE? Reach out to explore potential partnership opportunities.',
      email: 'partnerships@skillbridge.edu'
    },
    {
      id: 'research',
      name: 'Research Participation',
      description: 'Want to contribute to our research? Contact our research team to learn how you can participate.',
      email: 'research@skillbridge.edu'
    },
    {
      id: 'media',
      name: 'Media Inquiries',
      description: 'For media inquiries, press releases, or speaking engagements, please contact our communications team.',
      email: 'media@skillbridge.edu'
    }
  ];
  
  res.json(departments);
});

module.exports = router;
