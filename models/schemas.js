var mongoose = require('mongoose')

var TaskSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: Number
    }
});


module.exports = {
    TaskSchema
}