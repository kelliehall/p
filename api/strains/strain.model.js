'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StrainSchema = new Schema({
    active: Boolean,
    name: { type: String, required: true },
    breeder: { type: String, required: true },
    genetics: { type: String },
    source: { type: String },
    notes: [{
        date: { type: String, required: true },
        note: String,
        grow: String,
    }]
});

const Strain = mongoose.model('strain', StrainSchema);

module.exports = Strain;