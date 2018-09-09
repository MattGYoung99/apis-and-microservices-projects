const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const Url = require('./models/urlModel');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, (err, data) => {
    if(err) return err
    else {
        console.log('Successfully connected to database')
    }
})
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

var urlLength = 0;
app.post('/api/shorturl/new', (req, res) => {
    Url.count({}, (err, c) => {
        if(err) res.json({error: err})
        else urlLength = c
    })
    new Url({
        _id: req.body.url["origin"],
        newShortUrl: urlLength
    }).save((err, doc) => {
        if(err) res.json(err)
        else res.json(doc)
    })
})

app.get('/api/shorturl/:short_Url?', (req, res) => { 
    Url.findOne({newShortUrl: req.params.short_Url}, (err, doc) => {
        if(err) res.json(err)
        else res.redirect(doc._id)
    })
})


app.get('/testing', (req, res) => {
    Url.count({}, (err, c) => {
        if(err) res.json({error: err})
        else res.json({count: c})
    })
})
app.listen(3000)