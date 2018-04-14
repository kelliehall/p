'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlowerSchema = new Schema({
    active: Boolean,
    identifier: { type: String, required: true },
    strain: String,
    grow: { type: String },
    
    planted: { type: String },
    harvested: { type: String },
    yield: String,

    genetics: { type: String },
    breeder: { type: String },

    mother: Boolean,
    children: [{ type: String }],
    clone: Boolean,
    cloneStart: String,

    history: [{
        note: { type: String },
        date: String,
        nutrients: [{
            name: String,
            amount: String
        }],
        transplanted: Boolean,
        defeciencys: String,
        flushed: Boolean,
        watered: Boolean,
        ph: {
            in: Number,
            out: Number,
        },
        ppm: {
            in: Number,
            out: Number
        },
        rate: String,
        timing: String,
        amount: String,
        height: String
    }]
});

const Flower = mongoose.model('flower', FlowerSchema);

module.exports = Flower;