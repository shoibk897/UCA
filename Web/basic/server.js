var express = require('express');
var app = express();

app.use("/",express.static("./FrontEnd")) // Server for static file

app.listen(8080)