/**
 * Created by osho on 4/28/17.
 */
var express = require('express');
var app = express();
var path = require('path');

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname,'/../app/index.html'))
});

app.use(express.static(path.join(__dirname,'../')));
app.listen(3000);
