'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrowSchema = new Schema({
    name: { type: String, required: true },
    //veg or flower
    status: { type: String },
    start: { type: String, required: true },
    
    cycle: String,
    harvested: String,

    flowers: [String],
    notes: [{
        date: String,
        observation: String
    }]
});

const Grow = mongoose.model('grow', GrowSchema);

module.exports = Grow;
