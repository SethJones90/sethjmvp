const express = require('express');
const router = express.Router();

// @route   GET api/messages/test
// @desc    test messages route
// access   public route
router.get('/test', (req, res) => res.json({ message: "messages works" }));

module.exports = router;