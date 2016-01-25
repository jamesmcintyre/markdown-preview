'use strict';



const PORT = 3000;

//bring in dependancies
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');
var fs = require('fs');
var app = express();


//configure general middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


// route definitions
app.get('/', function(req, res, next){
    fs.readFile('./index.html', function(err, data){
        var html = data.toString();
        res.send(html);
    })
});

app.post('/convert', function(req, res) {
  var toConvert = req.body.text;
  var toHTML = JSON.stringify( marked(toConvert) );
  console.log(toHTML);
  res.send(toHTML);
});




//spin up server
app.listen(PORT, function(){
    console.log('Express Server Listening on port ', PORT)
});
