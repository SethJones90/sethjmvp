const express = require('express');
const router = express.Router();

const Message = require('../../models/Message');

// @route   GET api/messages/test
// @desc    test messages route
// access   public route
router.get('/test', (req, res) => res.json({ message: "messages works" }));


// @route   POST api/users/messages
// @desc    test users route
// access   public route
router.post('/', (req, res) => { 
  const newMessage = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  })
  newMessage.save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});

module.exports = router;