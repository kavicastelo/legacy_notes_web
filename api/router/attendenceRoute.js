const express = require('express');
const attendanceController = require('../controller/attendanceController');

const router = express.Router();

router.post('/start', attendanceController.startAttendance);
router.post('/stop', attendanceController.stopAttendance);

module.exports = router;

