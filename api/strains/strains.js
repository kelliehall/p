'use strict';

const mongoose = require('mongoose');
const Strain = require('./strain.model');

class Strains {
    constructor({ req }) {
        Object.assign(this, req);
    }

    create() {
        let strainObj = Object.assign({}, this.body, {
            active: true
        });
        let strain = new Strain(strainObj);
        return Strain.create(strain).then(data => Strain.findById(data._id))
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

        return Strain.findOne(mongoQuery).then(data => data);
    }

    getAll() {
        return Strain.find().then(data => data);
    }

    deleteStrain() {
        let { params } = this;
        let { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Promise.reject(
                new Error('Bad Request', -14, 'GetByIdException', `<${id}> isn't a valid ObjectId`)
            )
        }
        const objId = new mongoose.Types.ObjectId(id);
        return Strain.findByIdAndRemove(objId).then(data => data);
    }
}

module.exports = Strains;
