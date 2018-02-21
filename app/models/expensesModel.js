"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.expensesRouter = express.Router();
var dataBase_1 = require("../../dataBase");
var req;
var res;
exports.returnContendOfDb = dataBase_1.connectToDb().then(function (client) {
    var collection = client.db('expenses').collection('expenses');
    // return collection.findOne({"title" : "Damn it you spend money again!!!"})
    collection.find({}).toArray(function (err, content) {
        if (err)
            return err;
        res.json(content);
        // .then((data: JSON) => {
        //     return res.json(data)
        // })
    });
});
//# sourceMappingURL=expensesModel.js.map