const mongoose = require('mongoose')


const UrlSchema = new mongoose.Schema({
    _id: String,
    newShortUrl: Number
})

const Url = mongoose.model('Url', UrlSchema)


module.exports = Url
