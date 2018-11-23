var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task_db')

var TaskSchema = require('./schemas').TaskSchema

module.exports = mongoose.model('task', TaskSchema)