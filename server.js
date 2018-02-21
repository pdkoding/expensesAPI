"use strict";
// BASE SETUP
Object.defineProperty(exports, "__esModule", { value: true });
// call the packages we need
var express = require("express");
var app = express();
//var cors = require('cors');
var bodyParser = require('body-parser');
var dataBase_1 = require("./dataBase");
var expense_1 = require("./app/controllers/expense");
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 6000; // set our port
// RouterS FOR OUR API
var router = express.Router();
// middleware to use for all requests
router.use(function (req, res, next) {
    res.json({ message: 'Something is happening.' });
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
// REGISTER OUR ROUTES -------------------------------
//app.use(cors)
app.use('/api', router);
app.use(expense_1.expensesRouter);
// START THE SERVER
dataBase_1.connectToDb().then(function (db) {
    // console.log('database is', db)
    dataBase_1.setDb(db);
    app.listen(port);
});
console.log('Magic happens on port ' + port);
//# sourceMappingURL=server.js.map