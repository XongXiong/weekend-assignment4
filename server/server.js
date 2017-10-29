var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

var pictures = require('./public/script/pictures.js')

app.get('/pictures', function(req, res) {
    res.send(pictures);
})

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('Listening on port', port);
})