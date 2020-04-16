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

require('./app/routes/contact-list.routes.js')(app);

// Create a Server
app.listen(3000, () => console.log('Example app listening on port 3000!'))

