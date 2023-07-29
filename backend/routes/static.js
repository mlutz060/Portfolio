const express = require('expresss');
const router = express.Router();

router.use(express.static("frontend"));
router.use("/css", express.static(__dirname + "frontend/css"));


moudule.exports = router;