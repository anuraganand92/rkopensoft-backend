router.get('/studentHome', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.render('studentHome', {students: students});
        }
    });
});
