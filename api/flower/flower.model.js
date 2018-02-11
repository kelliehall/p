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

    notes: [{
        week: String,
        note: String,
        grow: String,
        date: String
    }]
});

const Flower = mongoose.model('flower', FlowerSchema);

module.exports = Flower;