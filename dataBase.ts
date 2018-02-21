import {Db, MongoClient, connect} from "mongodb"
const URL = "mongodb://pdkoding:zx134579@ds235388.mlab.com:35388/expenses"


//Connect to the db
export let db: Db

export function connectToDb() {
    return new Promise<MongoClient>((resolve, reject) => {
        connect(URL, (err: Error, client: Object) => {
            if (err) {
                reject(err)
            } else {
                resolve(client)
            }
        })
    })

}

export function setDb(database: Db) {
    db = database
}
/*
export function getDb(): Db {
    return db
}*/