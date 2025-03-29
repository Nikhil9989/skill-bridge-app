const express = require('express');
const router = express.Router();

/**
 * @route   GET api/dashboard/data
 * @desc    Get all dashboard data
 * @access  Public
 */
router.get('/data', (req, res) => {
  // Mock data for dashboard
  const dashboardData = {
    awarenessData: {
      labels: ['Students', 'Employers', 'Educators', 'Parents'],
      datasets: [{
        label: 'Problem Awareness (%)',
        data: [87, 92, 78, 65],
        backgroundColor: 'rgba(53, 80, 222, 0.7)',
        borderColor: 'rgba(53, 80, 222, 1)',
        borderWidth: 1
      }]
    },
    
    severityData: {
      labels: ['Technical Skills', 'Communication', 'Problem Solving', 'Industry Knowledge', 'Adaptability', 'Leadership'],
      datasets: [{
        label: 'Skill Gap Severity (1-10)',
        data: [8.3, 7.2, 6.8, 8.5, 6.5, 7.9],
        backgroundColor: 'rgba(255, 107, 107, 0.3)',
        borderColor: 'rgba(255, 107, 107, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 107, 107, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 107, 107, 1)'
      }]
    },
    
    satisfactionData: {
      labels: ['Satisfied', 'Neutral', 'Dissatisfied'],
      datasets: [{
        data: [28, 32, 40],
        backgroundColor: [
          'rgba(98, 200, 142, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(255, 107, 107, 0.7)'
        ],
        borderColor: [
          'rgba(98, 200, 142, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(255, 107, 107, 1)'
        ],
        borderWidth: 1
      }]
    },
    
    adoptionData: {
      labels: ['Very Likely', 'Somewhat Likely', 'Neutral', 'Unlikely'],
      datasets: [{
        data: [42, 35, 18, 5],
        backgroundColor: [
          'rgba(53, 80, 222, 0.7)',
          'rgba(98, 200, 142, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(255, 107, 107, 0.7)'
        ],
        borderColor: [
          'rgba(53, 80, 222, 1)',
          'rgba(98, 200, 142, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(255, 107, 107, 1)'
        ],
        borderWidth: 1
      }]
    }
  };
  
  res.json(dashboardData);
});

/**
 * @route   GET api/dashboard/progress
 * @desc    Get research progress data
 * @access  Public
 */
router.get('/progress', (req, res) => {
  // Mock data for research progress
  const progressData = [
    {
      id: 'surveys',
      label: 'Surveys Completed',
      current: 105,
      target: 300,
      percentage: 35
    },
    {
      id: 'interviews',
      label: 'Interviews Conducted',
      current: 12,
      target: 60,
      percentage: 20
    },
    {
      id: 'focus-groups',
      label: 'Focus Groups Completed',
      current: 2,
      target: 8,
      percentage: 25
    },
    {
      id: 'prototype-tests',
      label: 'Prototype Tests Run',
      current: 3,
      target: 30,
      percentage: 10
    }
  ];
  
  res.json(progressData);
});

/**
 * @route   GET api/dashboard/findings
 * @desc    Get key findings data
 * @access  Public
 */
router.get('/findings', (req, res) => {
  // Mock data for key findings
  const keyFindings = [
    '92% of employers report difficulties finding graduates with the right combination of technical and soft skills',
    'Technical skills in emerging technologies show the largest gap (8.3/10 severity)',
    'Only 28% of students are satisfied with current skill development options',
    '77% of respondents would likely adopt a hybrid learning model like SKILL BRIDGE',
    'Personalized learning paths and industry mentorship are the most appealing features to potential users'
  ];
  
  res.json(keyFindings);
});

/**
 * @route   GET api/dashboard/phases
 * @desc    Get research phases data
 * @access  Public
 */
router.get('/phases', (req, res) => {
  // Mock data for research phases
  const researchPhases = [
    {
      id: 1,
      title: 'Problem Identification',
      description: 'Identifying the core challenges in the Indian education system through extensive literature review, market analysis, and preliminary stakeholder interviews.',
      timeline: 'Completed: December 2024',
      keyFindings: [
        'Critical disconnect between curriculum and industry needs',
        'Fragmented learning ecosystem leading to skill gaps',
        'Geographical disparities in education quality and access'
      ]
    },
    {
      id: 2,
      title: 'Stakeholder Analysis',
      description: 'Comprehensive analysis of the needs, challenges, and expectations of all stakeholders in the education ecosystem.',
      timeline: 'January - March 2025',
      keyFindings: [
        'Students seek practical, industry-aligned skills',
        'Employers struggle to find candidates with right skill combinations',
        'Educational institutions face infrastructure and faculty expertise limitations'
      ]
    },
    {
      id: 3,
      title: 'Solution Conceptualization',
      description: 'Development of the SKILL BRIDGE concept based on initial research findings and stakeholder needs analysis.',
      timeline: 'March - April 2025',
      keyFindings: [
        'Hybrid learning model addresses both access and quality challenges',
        'Domain-based approach better aligns with industry skill requirements',
        'Personalization is key to addressing diverse learning needs'
      ]
    },
    {
      id: 4,
      title: 'Validation and Refinement',
      description: 'Validating the SKILL BRIDGE concept through comprehensive research methods and iterative refinement based on feedback.',
      timeline: 'Ongoing: April - June 2025',
      keyFindings: [
        'Initial response shows strong interest in the hybrid model',
        'Industry mentorship is a highly valued component',
        'Institutional partnerships are critical for infrastructure access'
      ]
    }
  ];
  
  res.json(researchPhases);
});

module.exports = router;
