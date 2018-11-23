var TaskModel = require('../models/task-model')

function findAll (req, res, next) {  
  TaskModel.find({}, function (err, tasks) {
    if (err) console.log(err)
    res.send(tasks)
  })
}

function findOne (req, res, next) {
  TaskModel.findOne({_id: req.params.id}, function (err, task) {
    
    console.log(task);
    
    if (err) console.log(err)
    res.send(task)
  })
}

function create (req, res, next) {
  let newTask = new TaskModel(req.body)
  console.log( req.body )
  newTask.save(function (err, task) {
    if (err) console.log(err)
    res.send(task)
  })
}

function update (req, res, next) {
  TaskModel.findOne({_id: req.params.id}, function (err, task) {
    if (err) console.log(err)
    if (req.body.name) task.name = req.body.name
    
    task.save(function (err, savedTask) {
      if (err) console.log(err)
      res.send(savedTask)
    })

  })
}

function remove (req, res, next) {
  TaskModel.findOne({_id: req.params.id}, function (err, task) {
    if (err) console.log(err)
    var deleted_task = task;
    task.remove()
    res.send(deleted_task)
  })
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}