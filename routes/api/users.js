const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    test users route
// access   public route
router.get('/test', (req, res) => res.json({ message: "users works" }));

module.exports = router;