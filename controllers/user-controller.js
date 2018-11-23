var UserModel = require('../models/user-model')

function findAll (req, res, next) {  
  UserModel.find({}, function (err, users) {
    if (err) console.log(err)
    res.send(users)
  })
}

function findOne (req, res, next) {
  UserModel.findOne({_id: req.params.id}, function (err, user) {    
    if (err) console.log(err)
    res.send(user)
  })
}

function create (req, res, next) {
  let newUser = new UserModel(req.body)
  newUser.save(function (err, user) {
    if (err) console.log(err)
    res.send(user)
  })
}

function update (req, res, next) {
  UserModel.findOne({_id: req.params.id}, function (err, user) {
    if (err) console.log(err)
    if (req.body.name) user.name = req.body.name
    
    user.save(function (err, savedUser) {
      if (err) console.log(err)
      res.send(savedUser)
    })

  })
}

function remove (req, res, next) {
  UserModel.findOne({_id: req.params.id}, function (err, user) {
    if (err) console.log(err)
    var deleted_user = user;
    user.remove()
    res.send(deleted_user)
  })
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}