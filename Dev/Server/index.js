
// Dependencies
var express = require('express');
var cors = require('cors');
var server = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
server.use(bodyParser.json())
server.use(cors());

// Required variables
var path = require('path');
var mongodb = require("mongodb"),
		ObjectID = mongodb.ObjectID
var multer = require('multer');

var mongojs     =   require('mongojs');
var morgan      =   require('morgan');
var db =  mongojs('mongodb://daariff:startup@ds061454.mongolab.com:61454/appdatabase',['users','foodLists']);

server.use(express.static('tests/test1'));
//var manageUsers = require('./auth/manageUser')(server, db);
var manageFood = require('./productAPIS/foodList')(server,db,ObjectID);

/*server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

/* ----------------- SERVE TEST TEMPLATES -------------------- */

server.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/tests/test1/home.html'));
});

/*------------------------------------------------------------- */

server.listen(process.env.PORT || 5000, function () {
    console.log("Server started @ ", process.env.PORT || 5000);
});
