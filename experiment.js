"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Mongo
var mongodb = require("mongodb");
var image = require("./image");
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('mydb', server, { w: 1 });
db.open(function () { });
function getJob(id, cb) {
    db.collection('jobs', function (err, jobsCollection) {
        if (err)
            return cb(err);
        jobsCollection.findOne({ "_id": new mongodb.ObjectID(id) }, function (err, job) {
            if (err)
                return cb(err);
            return cb(null, job);
        });
    });
}
exports.getJob = getJob;
function addJob(inputUri, cb) {
    db.collection('jobs', function (err, jobsCollection) {
        if (err)
            return cb(err);
        jobsCollection.insertOne({
            user: new mongodb.ObjectID("5541c66b51636c994b0454db"),
            inputUri: inputUri,
            outputUri: inputUri
        }, function (err, result) {
            if (err)
                return cb(err);
            var job = result.ops[0];
            image.downloadFile(job.inputUri, function () {
                console.log('image downloaded');
                console.log('arguments', arguments);
            });
            cb(null, job);
        });
    });
}
exports.addJob = addJob;
//# sourceMappingURL=experiment.js.map