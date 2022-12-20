const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    rollno: { type: String, required: true, unique: true },
    contactno: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    blockno: { type: String, required: true },
    roomno: { type: String, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;