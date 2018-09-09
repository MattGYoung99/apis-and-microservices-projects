const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    _id: String,
    desc: String,
    duration: String,
    date: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User