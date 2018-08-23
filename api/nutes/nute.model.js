'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NuteSchema = new Schema({
    active: { type: Boolean, required: true },

    name: { type: String, required: true },
    added: { type: String, required: true },
    need: { type: Boolean, required: true },
    image: String,

    tracking: { type: String, trim: true },
    links: [{
        site: String,
        link: String
    }]
});

const Nute = mongoose.model('nute', NuteSchema);

module.exports = Nute;