const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');
const express = require('express');
const app = express();
const port = 3004;
const router = express.Router();
const bodyParser = require('body-parser');

const Nutes = require('./nutes/nutes');
const Cycles = require('./cycle/cycles');
const Grows = require('./grow/grows');
const Flowers = require('./flower/flowers');
const Strains = require('./strains/strains');

app.set('port', port);
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

if (config && config.db) {
    mongoose.connect(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/p`);
} else {
    mongoose.connect('mongodb://localhost/p');
}
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Nutes
app.get('/nute/:id', (req, res) => {
    new Nutes({ req }).getById().then(result => res.json(result));
}).post('/nute', (req, res) => {
    new Nutes({ req }).create().then(result => res.json(result));
}).get('/nute', (req, res) => {
    new Nutes({ req }).getAll().then(result => res.json(result));
}).delete('/nute/:id', (req, res) => {
    new Nutes({ req }).deleteNute().then(result => res.json(result));
});

//Cycles
app.get('/cycle/:id', (req, res) => {
    new Cycles({ req }).getById().then(result => res.json(result));
}).post('/cycle', (req, res) => {
    new Cycles({ req }).create().then(result => res.json(result));
}).get('/cycle', (req, res) => {
    new Cycles({ req }).getAll().then(result => res.json(result));
}).delete('/cycle/:id', (req, res) => {
    new Cycles({ req }).deleteCycle().then(result => res.json(result));
});

//Grows
app.get('/grow/:id', (req, res) => {
    new Grows({ req }).getById().then(result => res.json(result));
}).post('/grow', (req, res) => {
    new Grows({ req }).create().then(result => res.json(result));
}).get('/grow', (req, res) => {
    new Grows({ req }).getAll().then(result => res.json(result));
}).delete('/grow/:id', (req, res) => {
    new Grows({ req }).deleteGrow().then(result => res.json(result));
});

//Flowers
app.get('/flower/:id', (req, res) => {
    new Flowers({ req }).getById().then(result => res.json(result));
}).post('/flower', (req, res) => {
    new Flowers({ req }).create().then(result => res.json(result));
}).get('/flower', (req, res) => {
    new Flowers({ req }).getAll().then(result => res.json(result));
}).delete('/flower/:id', (req, res) => {
    new Flowers({ req }).deleteFlower().then(result => res.json(result));
}).put('/flower/:id', (req, res) => {
    new Flowers({ req }).update().then(result => res.json(result));
});


//Strains
app.get('/strain/:id', (req, res) => {
    new Strains({ req }).getById().then(result => res.json(result));
}).post('/strain', (req, res) => {
    new Strains({ req }).create().then(result => res.json(result));
}).get('/strain', (req, res) => {
    new Strains({ req }).getAll().then(result => res.json(result));
}).delete('/strain/:id', (req, res) => {
    new Strains({ req }).deleteStrain().then(result => res.json(result));
});
