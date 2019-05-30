var express = require('express');
var router = express.Router();
var apptsCtrl = require('../controllers/appts');


router.get('/appts', apptsCtrl.index);  //going to controller
// router.post('/appts', apptsCtrl.create);
router.get('/appts', apptsCtrl.show)

module.exports = router;