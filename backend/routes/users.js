const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const rollno = req.body.rollno;
    const contactno = req.body.contactno;
    const email = req.body.email;
    const blockno = req.body.blockno;
    const roomno = req.body.roomno;

    const newUser = new User({
        name,
        rollno,
        contactno,
        email,
        blockno,
        roomno,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.rollno = req.body.rollno;
            user.contactno = req.body.contactno;
            user.email = req.body.email;
            user.password = req.body.password;
            user.blockno = req.body.blockno;
            user.roomno = req.body.roomno;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;