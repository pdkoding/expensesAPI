"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.expensesRouter = express.Router();
var dataBase_1 = require("../../dataBase");
// import {returnContendOfDb} from "../models/expensesModel";
exports.expensesRouter.get('/expenses', function (req, res) {
    return dataBase_1.connectToDb().then(function (client) {
        var collection = client.db('expenses').collection('expenses');
        collection.find({}).toArray(function (err, content) {
            if (err)
                return err;
            res.json(content);
            // .then((data: JSON) => {
            //     return res.json(data)
            // })
        });
    });
}, exports.expensesRouter.post('/expenses', function (req, res) {
    var spendedCash = ({
        title: /*req.body.title*/ "hm",
        purchaseDate: /*req.body.purchaseDate*/ "30.04.2018",
        amount: /*req.body.amount*/ 222
    });
    return dataBase_1.connectToDb().then(function (client) {
        var collection = client.db('expenses').collection('expenses');
        collection.insertOne(spendedCash, function (err, result) {
            if (err)
                return err;
            res.redirect('/expenses');
            return result;
        });
    });
}));
exports.expensesRouter.put('/expenses/_id', function (req, res) {
    return dataBase_1.connectToDb().then(function (client) {
        var collection = client.db('expenses').collection('expenses');
        collection.findOneAndUpdate({ _id: "5a8b1b5172e51d6104b121e0" }, { $set: {
                title: "mega update",
                purchaseDate: "01.05.2018",
                amount: 32423423
            } });
        res.json('finally');
    });
});
/*  collection.updateOne({_id: "5a8b1b5172e51d6104b121e0"}, { $set: {
              title: "megaupdate",
              purchaseDate: "01.05.2018",
              amount: 32423423
          }},
      function(err, callback){
          if(err) res.json(err)
          else res.json('finally')
      })
})*/
//# sourceMappingURL=expense.js.map