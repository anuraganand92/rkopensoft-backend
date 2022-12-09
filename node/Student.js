const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    blockNumber: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
