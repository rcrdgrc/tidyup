var Address = require('../models/address');

module.exports = {  //this is being called from routes
  index,
  create,
  show
  // new: newAddress,
//   addAddress
};


function index(req, res) {
  Address.find({}, function (err, address) {   //this is being called from rouetes
    res.render('address/address', {  //this is calling views address
      title: 'Address', address
    });
  });
}

function create(req, res) {
  var address = new Address(req.body);
  address.save(function(err) {      //saves info 
    if (err) return res.redirect('/address/address');
    // res.redirect('/movies');
    res.render('address/show', {address});  //this is being passed 
  });
};

function show(req, res) {
  res.render('address/show', {
      title: 'Address Detail',
});
}
 

// function newAddress(req, res) {
//   Address.find({}, function (err, address) {
//     res.render('address', {
//       title: 'Add Address',
//       address
//     });
//   })
// }

// function addToCast(req, res) {
//     Movie.findById(req.params.id, function (err, movie) {
//       movie.cast.push(req.body.performerId);
//       movie.save(function (err) {
//         res.redirect(`/movies/${movie._id}`);
//       });
//     });
//   }
  
//   function create(req, res) {
//     // Need to "fix" date formatting to prevent day off by 1
//     // This is due to the <input type="date"> returning the date
//     // string in this format:  "YYYY-MM-DD"
//     var s = req.body.born;
//     req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
//     Performer.create(req.body, function (err, performer) {
//       res.redirect('/performers/new');
//     });  