//Basic required imports for NodeJS

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of express for our app and instantiate bodyParser and cors
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//GET Call to return JSON that formats natural unix date
app.get('/dateValues/:dateVal', (req, res, next)=>{
    //Gets the requested data for date
    const dateVal = req.params.dateVal;
    //Options for converting data to human readable date
    const dateFormattingOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if(isNaN(dateVal)) {
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
        var unixDate = new Date(dateVal).getTime()/1000;
    }
    else {
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    }
    res.json({unix: unixDate, natural: naturalDate});
})
app.listen(8080, ()=> {
    console.log('Ayyy there ya go');
})