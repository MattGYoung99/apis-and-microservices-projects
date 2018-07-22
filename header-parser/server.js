//Basic imports for nodeJS environments
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Create an instance of express for our app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//Api url
const api = `/api/whoami`;
app.get(api, (req, res, next) => {
    const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const software = req.headers['user-agent'];
    const language = req.headers['accept-language'].split(',')[0];
    res.json({'ipaddress':ipaddress,'Supported Language':language,'System Specifications':software});
})

//Server setup
app.listen(8080, () => {
    console.log('Working');
})