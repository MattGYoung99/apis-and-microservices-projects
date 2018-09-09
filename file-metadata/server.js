const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true  
}))

app.post('/uploadFile', (req, res) => {
    res.json({file: req.body.upfile})
})
app.listen(4000)