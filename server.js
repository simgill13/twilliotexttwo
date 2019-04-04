 const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
const path = require('path');

const PORT = process.env.PORT || 8080;
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});






app.post('/textmsg', (req, res) => {
    res.status(200).json({msg: 'decomissioned server'})

})


app.listen(PORT, () => console.log(` app listening on port ${PORT}!`))

























