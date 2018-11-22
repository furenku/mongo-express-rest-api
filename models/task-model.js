var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-express-rest-api')

var TaskSchema = require('./schemas').TaskSchema

module.exports = mongoose.model('instruction', TaskSchema)