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



var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


module.exports = {
    TaskSchema,
    UserSchema
}