'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlowerSchema = new Schema({
    active: Boolean,
    strain: String,
    identifier: { type: String, required: true },
    planted: { type: String },
    end: { type: String },
    yield: String,
    grow: { type: String },

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
            amount: String,
            suggested: String
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
        height: Number
    }]
});

const Flower = mongoose.model('flower', FlowerSchema);

module.exports = Flower;