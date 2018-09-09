const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/api/timestamp/:date_string?', (req, res) => {
    let dateString = new Date(req.params.date_string)
    if (dateString.getTime() === null || dateString.toUTCString() === 'Invalid Date') {
        res.json({error: 'Invalid Date'})
    } else {
        res.json({unix: dateString.getTime(), utc: dateString.toUTCString()})
    }
})
app.listen(8080, ()=> {
    console.log('Ayyy there ya go');
})