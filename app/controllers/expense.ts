import * as express from 'express'
export const expensesRouter = express.Router()
import {connectToDb, db} from '../../dataBase'
import { MongoClient } from "mongodb"
// import {returnContendOfDb} from "../models/expensesModel";

expensesRouter.get('/expenses', (req: express.Request, res: express.Response) => {
    return connectToDb().then((client: MongoClient) => {
        const collection = client.db('expenses').collection('expenses')
        collection.find({}).toArray((err:Error, content: JSON) => {
            if (err) return err
            res.json(content)

            // .then((data: JSON) => {
            //     return res.json(data)
            // })
    })
})},

expensesRouter.post('/expenses', (req: express.Request, res: express.Response) => {
    var spendedCash = ({
        title: /*req.body.title*/"hm",
        purchaseDate: /*req.body.purchaseDate*/"30.04.2018",
        amount: /*req.body.amount*/222
    })
    return connectToDb().then((client: MongoClient) => {
        const collection = client.db('expenses').collection('expenses')
        collection.insertOne(spendedCash, (err: Error, result: any) => {
            if (err) return err
            res.redirect('/expenses')
            return result
        })
    })
}))

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

expensesRouter.put('/expenses/:5a8b1b5172e51d6104b121e0', function(req: express.Request, res: express.Response){
    return connectToDb().then((client: MongoClient) => {
    const collection = client.db('expenses').collection('expenses')
        res.send(collection.findOneAndUpdate({_id: "5a8b1b5172e51d6104b121e0"}, {$set: {
            title: "mega update",
            purchaseDate: "01.05.2018",
            amount: 32423423
        }}))
    })
})