'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StrainSchema = new Schema({
    active: Boolean,
    name: { type: String, required: true },
    breeder: { type: String },
    genetics: {
        mother: { type: String },
        father: { type: String }
    },
    source: { type: String }
});

const Strain = mongoose.model('strain', StrainSchema);

module.exports = Strain;