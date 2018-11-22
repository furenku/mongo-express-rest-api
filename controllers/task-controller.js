var TaskModel = require('../models/task-model')

function findAll (req, res, next) {
  TaskModel.find({}, function (err, tasks) {
    if (err) console.log(err)
    res.send(tasks)
  })
}
function create (req, res, next) {
  let newTask = new TaskModel(req.body)
  newTask.save(function (err, task) {
    if (err) console.log(err)
    res.send(task)
  })
}
function update (req, res, next) {
  TaskModel.findOne({name: req.params.id}, function (err, task) {
    if (err) console.log(err)
    if (req.body.name) task.name = req.body.name
    task.age = req.body.age
    task.save(function (err, savedTask) {
      if (err) console.log(err)
      res.send(savedTask)
    })
  })
}
function remove (req, res, next) {
  TaskModel.findOne({name: req.params.id}, function (err, res) {
    if (err) console.log(err)
    res.remove()
  })
}

module.exports = {
    findAll,
    create,
    update,
    remove
}