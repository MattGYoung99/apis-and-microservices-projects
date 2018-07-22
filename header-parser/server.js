//Basic imports for nodeJS environments
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Create an instance of express for our app and instantiate bodyParser and cors
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors);

//Api url
const api = '/api/whoami';
app.get(api, (req, res, next) => {
    console.log('Just to make sure');
})

//Server setup
app.listen(3000, () => {
    console.log('Working');
})