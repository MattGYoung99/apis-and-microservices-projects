//Basic imports for nodeJS environments
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Create an instance of express for our app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/whoami', (request, response) => {
    let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress
    response.send({ipaddress: ip, software: request.headers["user-agent"], language: request.headers["accept-language"]})
})

//Server setup
app.listen(8080, () => {
    console.log('Working');
})