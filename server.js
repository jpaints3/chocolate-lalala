var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/home.ejs"));

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.listen(port, function(){
    console.log("IT'S ALIVE!!!! -Frankenstein")
})