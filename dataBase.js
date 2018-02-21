"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var URL = "mongodb://pdkoding:zx134579@ds235388.mlab.com:35388/expenses";
function connectToDb() {
    return new Promise(function (resolve, reject) {
        mongodb_1.connect(URL, function (err, client) {
            if (err) {
                reject(err);
            }
            else {
                resolve(client);
            }
        });
    });
}
exports.connectToDb = connectToDb;
function setDb(database) {
    exports.db = database;
}
exports.setDb = setDb;
/*
export function getDb(): Db {
    return db
}*/ 
//# sourceMappingURL=dataBase.js.map