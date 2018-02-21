// BASE SETUP

// call the packages we need
import * as express from 'express'
const app = express()
//var cors = require('cors');

const bodyParser  = require('body-parser')
import {connectToDb, setDb} from './dataBase'
import {expensesRouter} from "./app/controllers/expense";

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 6000         // set our port

// RouterS FOR OUR API
var router = express.Router()
// middleware to use for all requests
    router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.json({message : 'Something is happening.'})
        next() // make sure we go to the next routes and don't stop here
    })

    router.get('/', (req: express.Request, res: express.Response) => {
        res.json({ message: 'hooray! welcome to our api!' })
    })

// REGISTER OUR ROUTES -------------------------------
//app.use(cors)
app.use('/api', router)
app.use(expensesRouter)

// START THE SERVER
connectToDb().then((db) => {
   // console.log('database is', db)
    setDb(db)
    app.listen(port);
})

console.log('Magic happens on port ' + port)