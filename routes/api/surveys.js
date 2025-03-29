const express = require('express');
const router = express.Router();

/**
 * @route   GET api/surveys
 * @desc    Get all surveys
 * @access  Public
 */
router.get('/', (req, res) => {
  // Mock data for surveys
  const surveys = [
    {
      id: 'student',
      title: 'Student Skills Gap Assessment',
      description: 'For current students and recent graduates from tier-2/3 cities',
      details: [
        'Duration: 15-20 minutes',
        'Focus: Identifying skill gaps and learning needs',
        'Incentive: ₹500 Amazon voucher for selected participants'
      ]
    },
    {
      id: 'employer',
      title: 'Employer Needs Analysis',
      description: 'For hiring managers and industry professionals',
      details: [
        'Duration: 15-20 minutes',
        'Focus: Industry skill requirements and hiring challenges',
        'Incentive: Early access to talent pool'
      ]
    },
    {
      id: 'institution',
      title: 'Educational Institution Assessment',
      description: 'For educators and administrators',
      details: [
        'Duration: 15-20 minutes',
        'Focus: Curriculum gaps and partnership potential',
        'Incentive: Exclusive partnership opportunities'
      ]
    },
    {
      id: 'concept',
      title: 'Solution Concept Testing',
      description: 'For all stakeholders',
      details: [
        'Duration: 10-15 minutes',
        'Focus: Feedback on SKILL BRIDGE concept',
        'Incentive: Priority access to beta program'
      ]
    }
  ];
  
  res.json(surveys);
});

/**
 * @route   GET api/surveys/:id
 * @desc    Get survey by ID
 * @access  Public
 */
router.get('/:id', (req, res) => {
  // Mock data for survey by ID
  const surveyTypes = {
    student: {
      title: 'Student Skills Gap Assessment',
      description: 'For current students and recent graduates from tier-2/3 cities',
      intro: 'This survey aims to identify skill gaps and learning needs of students and recent graduates. Your feedback will help us develop targeted solutions for improving educational outcomes.',
      questions: [
        {
          id: 'q1',
          type: 'radio',
          label: 'Which best describes your current status?',
          options: ['Current Student', 'Recent Graduate (< 2 years)', 'Working Professional (2+ years)', 'Unemployed/Seeking Work']
        },
        {
          id: 'q2',
          type: 'select',
          label: 'Which academic field are you studying or graduated from?',
          options: ['Computer Science/IT', 'Engineering (non-CS)', 'Business/Commerce', 'Arts & Humanities', 'Sciences', 'Other']
        },
        {
          id: 'q3',
          type: 'checkbox',
          label: 'Which skills do you feel you lack the most for industry readiness? (Select up to 3)',
          options: ['Technical/Domain Skills', 'Communication Skills', 'Problem-Solving', 'Teamwork', 'Leadership', 'Critical Thinking', 'Time Management']
        },
        {
          id: 'q4',
          type: 'textarea',
          label: 'What challenges have you faced in acquiring industry-relevant skills through your education?'
        }
      ]
    },
    employer: {
      title: 'Employer Needs Analysis',
      description: 'For hiring managers and industry professionals',
      intro: 'This survey helps us understand the skills employers are looking for and the challenges faced in hiring recent graduates. Your insights will inform our curriculum development.',
      questions: [
        {
          id: 'q1',
          type: 'radio',
          label: 'What is the size of your organization?',
          options: ['Small (1-50 employees)', 'Medium (51-500 employees)', 'Large (501-5000 employees)', 'Enterprise (5000+ employees)']
        },
        {
          id: 'q2',
          type: 'select',
          label: 'Which industry does your organization primarily operate in?',
          options: ['Information Technology', 'Manufacturing', 'Financial Services', 'Healthcare', 'Education', 'Retail', 'Other']
        },
        {
          id: 'q3',
          type: 'checkbox',
          label: 'What are the primary skill gaps you observe in recent graduates? (Select up to 3)',
          options: ['Technical Skills', 'Communication Skills', 'Problem-Solving', 'Adaptability', 'Teamwork', 'Industry Knowledge', 'Work Ethic']
        },
        {
          id: 'q4',
          type: 'textarea',
          label: 'What specific skills or knowledge areas would you like to see emphasized in educational programs?'
        }
      ]
    },
    institution: {
      title: 'Educational Institution Assessment',
      description: 'For educators and administrators',
      intro: 'This survey helps us understand the challenges faced by educational institutions in preparing industry-ready graduates. Your input will help us develop solutions that complement existing educational frameworks.',
      questions: [
        {
          id: 'q1',
          type: 'radio',
          label: 'What type of educational institution do you represent?',
          options: ['University', 'College', 'Polytechnic', 'Vocational Training Institute', 'Other']
        },
        {
          id: 'q2',
          type: 'select',
          label: 'How would you rate your institution\'s industry integration?',
          options: ['Excellent', 'Good', 'Average', 'Below Average', 'Poor']
        },
        {
          id: 'q3',
          type: 'checkbox',
          label: 'What are the biggest challenges your institution faces in providing industry-relevant education? (Select up to 3)',
          options: ['Curriculum Constraints', 'Faculty Expertise', 'Infrastructure Limitations', 'Industry Partnerships', 'Funding', 'Regulatory Requirements', 'Student Readiness']
        },
        {
          id: 'q4',
          type: 'textarea',
          label: 'How could an external partner help your institution improve the industry readiness of your students?'
        }
      ]
    },
    concept: {
      title: 'Solution Concept Testing',
      description: 'For all stakeholders',
      intro: 'This survey collects feedback on the SKILL BRIDGE concept. Your opinion will help us refine our approach and ensure it meets the needs of all stakeholders.',
      questions: [
        {
          id: 'q1',
          type: 'radio',
          label: 'Which stakeholder group do you primarily belong to?',
          options: ['Student/Recent Graduate', 'Industry Professional', 'Educator/Administrator', 'Parent', 'Other']
        },
        {
          id: 'q2',
          type: 'select',
          label: 'How would you rate the potential impact of the SKILL BRIDGE concept?',
          options: ['Very High', 'High', 'Moderate', 'Low', 'Very Low']
        },
        {
          id: 'q3',
          type: 'checkbox',
          label: 'Which aspects of the SKILL BRIDGE concept appeal to you most? (Select up to 3)',
          options: ['Hybrid Learning Model', 'Industry-Aligned Curriculum', 'Mentorship Component', 'Project-Based Learning', 'Personalized Learning Paths', 'Placement Support', 'Flexible Pricing']
        },
        {
          id: 'q4',
          type: 'textarea',
          label: 'What suggestions do you have to improve the SKILL BRIDGE concept?'
        }
      ]
    }
  };
  
  const survey = surveyTypes[req.params.id];
  
  if (!survey) {
    return res.status(404).json({ msg: 'Survey not found' });
  }
  
  res.json(survey);
});

/**
 * @route   POST api/surveys/:id/submit
 * @desc    Submit a survey response
 * @access  Public
 */
router.post('/:id/submit', (req, res) => {
  // In a real app, you would save the survey response to the database
  console.log(`Survey response received for survey ID: ${req.params.id}`);
  console.log('Response data:', req.body);
  
  // Send success response
  res.json({ 
    success: true, 
    message: 'Survey response submitted successfully',
    surveyId: req.params.id
  });
});

module.exports = router;
