//const express = require('express')
//const app = express()
//var api = require('./contactList.api.js')
//
//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});
//
////app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/contact', function(req, res){
//    res.json(api.getContactData());
//});
//
//app.delete('/contact:id', function(req, res){
//
//});

//module.exports = app
//app.listen(3000, () => console.log('Example app listening on port 3000!'))

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});

require('./app/routes/contact-list.routes.js')(app);

// Create a Server
app.listen(3000, () => console.log('Example app listening on port 3000!'))

