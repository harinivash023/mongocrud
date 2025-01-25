/*const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017';
let database;
const objectId = mongodb.ObjectId;

async function getDatabase() {
    if (!database) {
        const client = await mongoClient.connect(url);
        database = client.db('t1');
        console.log('Connected to database');
    }
    return database;
}

module.exports = { getDatabase, objectId };
*/

//old code using mongoclient

const mongse = require('mongoose');

let database;
async function getDatabase() {
    
    mongse.connect('mongodb://localhost:27017/t1')
    .then(db => {
        console.log('Connected to database');
    }).catch(() => {
        console.log('Database connection error');
    })
}

module.exports = { getDatabase };