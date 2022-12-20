const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomno: { type: String, required: true },
    studentname: { type: String, required: true },
}, {
    timestamps: true,
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;