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
/*expensesRouter.put('/expenses/5a8b1b5172e51d6104b121e0', function(req: express.Request, res: express.Response){
    return connectToDb().then((client: MongoClient) => {
        const collection = client.db('expenses').collection('expenses')
            collection.findOneAndUpdate({_id: "5a8b1b5172e51d6104b121e0"}, {$set: {
            title: "mega update",
            purchaseDate: "01.05.2018",
            amount: 32423423
        }})
        })
    })
})*/
exports.expensesRouter.put('/expenses/:5a8b1b5172e51d6104b121e0', function (req, res) {
    return dataBase_1.connectToDb().then(function (client) {
        var collection = client.db('expenses').collection('expenses');
        res.send(collection.findOneAndUpdate({ _id: "5a8b1b5172e51d6104b121e0" }, { $set: {
                title: "mega update",
                purchaseDate: "01.05.2018",
                amount: 32423423
            } }));
    });
});
//# sourceMappingURL=expense.js.map