const express = require('express');
const noteController = require('../controller/noteController');

const router = express.Router();

router.post('/save', noteController.saveNote);
router.get('/all', noteController.getAllNotes);
router.get('/get/:id', noteController.getNote);

module.exports = router;