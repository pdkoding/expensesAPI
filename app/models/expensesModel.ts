import * as express from 'express'
export const expensesRouter = express.Router()
import { connectToDb } from '../../dataBase'
import { MongoClient } from "mongodb"

var req: express.Request
var res: express.Response

export const returnContendOfDb = connectToDb().then((client: MongoClient) => {
    const collection = client.db('expenses').collection('expenses')
    // return collection.findOne({"title" : "Damn it you spend money again!!!"})
    collection.find({}).toArray((err:Error, content: JSON) => {
        if (err) return err
        res.json(content)

        // .then((data: JSON) => {
        //     return res.json(data)
        // })
    })
}





