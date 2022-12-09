const express = require('express');
const router = express.Router();

const Student = require('../models/student');
const Admin = require('../models/admin');

router.get('/login', (req, res) => {
    res.render('login', {});
});

router.post('/login', (req, res) => {
    const userType = req.body.userType;
    const emailId = req.body.emailId;

    if (userType === 'student') {
        Student.findOne({emailId: emailId}, (err, student) => {
            if (err) {
                console.log(err);
            } else {
                if (student) {
                    res.render('studentHome', {student: student});
                } else {
                    res.redirect('/login');
                }
            }
        });
    } else if (userType === 'admin') {
        Admin.findOne({emailId: emailId}, (err, admin) => {
            if (err) {
                console.log(err);
            } else {
                if (admin) {
                    res.render('adminHome', {admin: admin});
                } else {
                    res.redirect('/login');
                }
            }
        });
    }
});
