router.get('/adminHome', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.render('adminHome', {students: students});
        }
    });
});
