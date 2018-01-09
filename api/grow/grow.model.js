'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrowSchema = new Schema({
    name: { type: String, required: true },
    flowers: [mongoose.Types.ObjectId],
    cycle: mongoose.Types.ObjectId,
    start: { type: String, required: true },
    end: String,
    nutrients: [mongoose.Types.ObjectId],
    notes: [{
        date: String,
        observation: String
    }],
    status: { type: String, required: true, enum: ['veg', 'flower'] }
});

const Grow = mongoose.model('grow', GrowSchema);

module.exports = Grow;
