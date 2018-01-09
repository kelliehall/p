const http = require('http');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/p';
const express = require('express');
const app = express();
const port = 3004;
const router = express.Router();
const bodyParser = require('body-parser');

const Nutes = require('./nutes/nutes');
const Cycles = require('./cycle/cycles');
var Grows = requrie('./grow/grows');

app.set('port', port);
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Nutes
app.get('/nute/:id', (req, res) => {
    new Nutes({ req }).getById().then(result => res.json(result));
}).post('/nute', (req, res) => {
    new Nutes({ req }).create().then(result => res.json(result));
});

app.get('/nutes', (req, res) => {
    new Nutes({ req }).getAll().then(result => res.json(result));
});

//Cycles
app.get('/cycle/:id', (req, res) => {
    new Cycles({ req }).getById().then(result => res.json(result));
}).post('/cycle', (req, res) => {
    new Cycles({ req }).create().then(result => res.json(result));
});

app.get('/cycles', (req, res) => {
    new Cycles({ req }).getAll().then(result => res.json(result));
});

//Grows
app.get('/grow/:id', (req, res) => {
    new Grows({ req }).getById().then(result => res.json(result));
}).post('/grow', (req, res) => {
    new Grows({ req }).create().then(result => res.json(result));
});

app.get('/grows', (req, res) => {
    new Grows({ req }).getAll().then(result => res.json(result));
});

