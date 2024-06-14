const express = require('express');
const router = express.Router();
const alarmController = require('../controllers/alarmController');
const authenService = require('../services/authenService');

router.post('/', authenService, alarmController.setAlarm);
router.get('/', authenService, alarmController.getAlarms);
router.delete('/:medicationName', authenService, alarmController.deleteAlarm);

module.exports = router;
