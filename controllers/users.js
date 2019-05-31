const User = require('../models/user');

module.exports = {
  deleteAppt,
  index,
  newAppt,
  create,
  show,
  edit,
  save
};

function save(req, res){
  let name = req.user.name
  User.findOne({name: name})
  .then(person=>{
    let port = person.portfolio.id(req.params.id)
    port.set(req.body)
    person.save(()=>{
      res.redirect(`/users/${req.params.id}`)
    })
  })
}

function edit(req, res){
  let name = req.user.name
  User.findOne({name: name})
  .then(person=>{
    let port = person.portfolio.id(req.params.id)
    res.render('users/edit', {
      port,
      user: req.user,
      title: 'Appointments'
    })
  })
}

function deleteAppt(req, res){
  let name = req.user.name
  User.findOne({name: name})
  .then(person=>{
    person.portfolio.remove(req.params.id)
    person.save(()=>{
      res.redirect(`/users/index`)
    })
  })
}


function show(req, res){
  let name = req.user.name
  //add request here
  User.findOne({name: name})
  .then(person=>{
    let port = person.portfolio.id(req.params.id)
    res.render('users/show', {
      title: 'Appointments',
      user: req.user,
      port
    })
  })
}

function create(req, res){
  let name = req.user.name
  User.findOne({name: name})
  .then(person =>{
    person.portfolio.push(req.body)
    person.save(()=>{
      res.render('users/showadd',{
        title: 'Appointments',
        port: req.body,
        user: req.user,
        person
      })
    })
  })
}

function index(req, res, next) {
  let name = req.user.name
  User.findOne({name: name})
    .then(person=>{
      res.render('users/index', {
        title: 'Appointments',
        user: req.user,
        person
      })
    });
}

function newAppt(req, res){
  console.log(req.user)
  res.render('users/create', {
    user: req.user,
    title: 'Appointments'
  })
}