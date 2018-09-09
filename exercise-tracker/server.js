const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/user')



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, (err, data) => {
    if(err) return err
    else {
        console.log('Connected to database successfully!')
    }
})

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/api/exercise/new-user', (req, res) => {
    new User({
        _id: req.body.username
    }).save((err, doc) => {
        if(err) res.json({error: err})
        else {
            res.json({data: doc})
            console.log(doc)
        }
    })
})

app.post('/app/exercise/add', (req, res)=> {
    User.findById({_id: req.body.userid}, (err, data) => {
        if(err) {
            res.json({error: err})
        }
        data.desc.push(req.body.description)
        data.duration.push(req.body.duration)
        data.date.push(req.body.dateOfExercise)
        data.save((err, data) => {
            if(err) res.json({error: err})
            else res.json({data: data})
        })
    }) 
})


app.get('/test', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.SECRET_PORT || 3000)