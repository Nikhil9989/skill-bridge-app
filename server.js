const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Import API routes
const surveyRoutes = require('./routes/api/surveys');
const interviewRoutes = require('./routes/api/interviews');
const contactRoutes = require('./routes/api/contact');
const dashboardRoutes = require('./routes/api/dashboard');

// Use Routes
app.use('/api/surveys', surveyRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Database Connection
const connectDB = async () => {
  try {
    // For development purposes, we'll use a local MongoDB or connect to MongoDB Atlas
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/skill-bridge';
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Connect to Database
// Uncomment to connect to MongoDB
// connectDB();

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
