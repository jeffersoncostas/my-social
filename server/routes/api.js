const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'news';

const connection = (closure) => {
    return MongoClient.connect(url, (err, client) =>{
        
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        client.close();
    } )
}



// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


// Get users

router.get('/noticias', (req, res) => {
    connection((db) => {
        db.collection('noticias')
            .find()
            .toArray()
            .then((noticias) => {
                response.data = noticias;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
                console.log('aaaaaaaaaaaaaaaaaaaaa')
            });
    });
});

module.exports = router;