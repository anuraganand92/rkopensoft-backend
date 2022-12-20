const router = require('express').Router();
let Room = require('../models/rooms.model');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const roomno = req.body.roomno;
    const studentname = req.body.studentname;

    const newRoom = new Room({
        roomno,
        studentname,
    });

    newRoom.save()
        .then(() => res.json('Room added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Room.findById(req.params.id)
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Room.findByIdAndDelete(req.params.id)
        .then(() => res.json('Room deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/update/:id').post((req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            room.roomno = req.body.roomno;
            room.studentname = req.body.studentname;

            room.save()
                .then(() => res.json('Room updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}); 

module.exports = router;   