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


app.get('/test', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.SECRET_PORT || 3000)