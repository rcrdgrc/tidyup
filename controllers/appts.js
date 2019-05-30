var Appts = require('../models/appts');

module.exports = {  //this is being called from routes
  index,
  // create,
  show
};


function index(req, res) {
  Appts.find({}, function (err, appts) {   //this is being called from rouetes
    res.render('appts/appt', {  //this is calling views address
      title: 'Appt', appts
    });
  });
}


function show(req, res) {
  res.render('appts/appt', {
      title: 'Appts Detail',
})
}