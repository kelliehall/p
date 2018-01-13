'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlowerSchema = new Schema({
    identifier: { type: String },
    planted: { type: String },
    mother: Boolean,
    genetics: { type: String },
    grow: { type: String },
    active: Boolean,
    children: [{ type: String }],
    clone: Boolean,
    cloneStart: String,
    strain: String
});

const Flower = mongoose.model('flower', FlowerSchema);

module.exports = Flower;