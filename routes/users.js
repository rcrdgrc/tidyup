var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/index', isLoggedIn, userCtrl.index);
router.get('/new', isLoggedIn, userCtrl.newAppt)
router.get('/:id/edit', isLoggedIn, userCtrl.edit)
router.get('/:id', isLoggedIn, userCtrl.show)

router.post('/showadd', isLoggedIn, userCtrl.create)

router.put('/:id', isLoggedIn, userCtrl.save)

router.delete('/:id', isLoggedIn, userCtrl.deleteAppt)




function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
