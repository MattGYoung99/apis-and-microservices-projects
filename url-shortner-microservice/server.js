const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/new/:urlToShorten(*)', (req, res, next)=> {
    var { urlToShorten } = req.params;
    console.log(`${urlToShorten}`)
})
app.listen(3000, () => {
    console.log(`It's working!`);
});