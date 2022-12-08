const express = require('express');
const { Student, Admin } = require('./models');

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user is a student or an admin
  if (username.startsWith('s')) {
    // Look up the student in the database
    Student.findOne({ rollNumber: username }, (err, student) => {
      if (err) {
        // Handle error
      }

      if (!student) {
        // User not found
      } else {
        // Check password
        if (student.password === password) {
          // Login successful
        } else {
          // Incorrect password
        }
      }
    });
  } else {
    // Look up the admin in the database
    Admin.findOne({ email: username }, (err, admin) => {
      if (err) {
        // Handle error
      }

      if (!admin) {
        // User not found
      } else {
        // Check password
        if (admin.password === password) {
          // Login successful
        } else {
          // Incorrect password
        }
      }
    });
  }
});

// Student homepage route
router.get('/student', (req, res) => {
    // Check if user is logged in as a student
    if (req.user && req.user.type === 'student') {
      // Query the database to get the details of all rooms
      // and the students allocated to each room
      // and send the data to the client
    } else {
      // User is not logged in or not a student
    }
  });
  
  // Student profile route
  router.get('/student/profile', (req, res) => {
    // Check if user is logged in as a student
    if (req.user && req.user.type === 'student') {
      // Query the database to get the details of the logged-in student
      // and send the data to the client
    } else {
      // User is not logged in or not a student
    }
  });

  // Allot Rooms route
router.get('/admin/allot-rooms', (req, res) => {
    // Check if user is logged in as an admin
    if (req.user && req.user.type === 'admin') {
      // Query the database to get the details of all rooms
      // and the students allocated to each room
      // and send the data to the client
    } else {
      // User is not logged in or not an admin
    }
  });
  
  router.post('/admin/allot-rooms', (req, res) => {
    // Check if user is logged in as an admin
    if (req.user && req.user.type === 'admin') {
      // Get the room and student details from the request body
      // and update the student's room allocation in the database
      // and send a response to the client
    } else {
      // User is not logged in or not an admin
    }
  });

  module.exports = router;