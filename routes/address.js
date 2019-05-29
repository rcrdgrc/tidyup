var express = require('express');
var router = express.Router();
var addressCtrl = require('../controllers/address');


router.get('/address', addressCtrl.index);  //going to controller
router.post('/address/show', addressCtrl.create);
router.get('/address/show', addressCtrl.show)

// router.post('/address', addressCtrl.create);
// router.post('/movies/:id/performers', performersCtrl.addToCast);

module.exports = router;