const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');
const app = express();

//Connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls')

//Allows NodeJS to find static content
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


//Creates the database entry
app.get('/new/:urlToShorten(*)', (req, res, next)=> {
    var { urlToShorten } = req.params
    console.log(`${urlToShorten}`)
    return req.json({urlToShorten})
})
app.listen(3000, () => {
    console.log(`It's working!`);
});