const http = require('http');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/p';
const express = require('express');
const app = express();
const port = 3004;
const router = express.Router();
const bodyParser = require('body-parser');

const Nutes = require('./nutes/nutes');

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

app.get('/nute/:id', (req, res) => {
    new Nutes({ req }).getById().then(result => res.json(result));
}).post('/nute', (req, res) => {
    new Nutes({ req }).create().then(result => res.json(result));
});

app.get('/nutes', (req, res) => {
    new Nutes({ req }).getAll().then(result => res.json(result));
});

