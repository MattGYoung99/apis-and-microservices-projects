//Basic required imports for NodeJS

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of express for our app and instantiate bodyParser and cors
const app = module.exports = express();
app.user(bodyParser.json());
app.user(cors());


app.listen(8080, ()=> {
    console.log('Ayyy there ya go');
})