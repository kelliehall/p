'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrowSchema = new Schema({
    name: { type: String, required: true },
    flowers: [String],
    cycle: String,
    start: { type: String, required: true },
    end: String,
    nutrients: [String],
    notes: [{
        date: String,
        observation: String
    }],
    status: { type: String, required: true, enum: ['veg', 'flower'] }
});

const Grow = mongoose.model('grow', GrowSchema);

module.exports = Grow;
