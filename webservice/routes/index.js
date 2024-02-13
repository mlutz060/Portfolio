const express = require('express');
const router = express.Router();

router.user('/', require('./swagger'))
router.use('/blog', require('./blog'))
router.use('/resume', require('./resume'))
router.use('/projects', require('./projects'))
router.use('/yarn', require('./yarn'))

module.exports = router;