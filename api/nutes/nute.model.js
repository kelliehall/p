'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NuteSchema = new Schema({
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
    need: { type: Boolean, required: true },
    htg: {
        size: String,
        link: { type: String, trim: true }
    },
    amzn: {
        size: String,
        link: { type: String, trim: true }
    },
    tracking: { type: String, trim: true },
    added: { type: String, required: true },
    image: String
});

const Nute = mongoose.model('nute', NuteSchema);

module.exports = Nute;