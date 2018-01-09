'use strict';

const mongoose = require('mongoose');
const Nute = require('./nute.model');
const moment = require('moment');

class Nutes {
    constructor({ req }) {
        Object.assign(this, req);
    }

    create() {
        let nuteObj = Object.assign({}, this.body, {
            active: true,
            added: moment()
        })
        let nute = new Nute(nuteObj);
        return Nute.create(nute).then(data => Nute.findById(data._id));
    }

    getById() {
        let { params } = this;
        let { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Promise.reject(
                new Error('Bad Request', -14, 'GetByIdException', `<${id}> isn't a valid ObjectId`)
            )
        }
        const objId = new mongoose.Types.ObjectId(id);
        const mongoQuery = { _id: objId };

        return Nute.findOne(mongoQuery).then(data => data);
    }

    getAll() {
        return Nute.find().then(data => data);
    }
}

module.exports = Nutes;
