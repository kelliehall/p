'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlowerSchema = new Schema({
    active: Boolean,
    identifier: { type: String, required: true },
    strain: String,
    grow: {
        type: String
    },
    planted: { type: String },
    harvested: { type: String },
    yield: String,

    genetics: { type: String },

    children: [{ type: String }],
    cloned: String,
    flowered: String,

    history: [{
        note: { type: String },
        date: String,
        height: String,
        nutrients: [{
            name: String,
            amount: String,
        }],
        transplanted: Boolean,
        defeciencys: Boolean,
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
        amount: String
    }]
});

const Flower = mongoose.model('flower', FlowerSchema);

module.exports = Flower;