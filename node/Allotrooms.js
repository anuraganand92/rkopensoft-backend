router.get('/allotRooms', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.render('allotRooms', {students: students});
        }
    });
});

router.post('/allotRooms', (req, res) => {
    const rollNumber = req.body.rollNumber;
    const roomNumber = req.body.roomNumber;

    Student.findOneAndUpdate({rollNumber: rollNumber}, {roomNumber: roomNumber}, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/adminHome');
        }
    });
});
