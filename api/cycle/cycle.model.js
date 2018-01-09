'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CycleSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['flower', 'veg'] },
    weeks: {
        week: { type: Number, required: true },
        nutrients: [{
            nutrient: mongoose.Types.ObjectId,
            amount: String
        }]
    },
    grows: [mongoose.Types.ObjectId],
    flowers: [mongoose.Types.ObjectId],
    notes: [{
        date: String,
        observation: String
    }]
});

const Cycle = mongoose.model('cycle', CycleSchema);

module.exports = Cycle;