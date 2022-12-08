const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  blockNumber: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
});

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = {
  Student: mongoose.model('Student', StudentSchema),
  Admin: mongoose.model('Admin', AdminSchema),
};
