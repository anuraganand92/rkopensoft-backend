router.get('/profile', (req, res) => {
    Student.findOne({emailId: req.user.emailId}, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.render('profile', {student: student});
        }
    });
});
