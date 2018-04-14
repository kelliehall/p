'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrowSchema = new Schema({
    name: { type: String, required: true },
    flowers: [String],
    cycle: String,
    start: { type: String, required: true },
    harvested: String,
    nutrients: [String],
    notes: [{
        date: String,
        observation: String
    }],
    //veg or flower
    status: { type: String }
});

const Grow = mongoose.model('grow', GrowSchema);

module.exports = Grow;
