'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CycleSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['flower', 'veg'] },
    weeks: {
        week: { type: Number, required: true },
        nutrients: [{
            nutrient: String,
            amount: String
        }]
    },
    grows: [String],
    flowers: [String],
    notes: [{
        date: String,
        observation: String
    }]
});

const Cycle = mongoose.model('cycle', CycleSchema);

module.exports = Cycle;