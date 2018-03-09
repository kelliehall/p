'use strict';

const mongoose = require('mongoose');
const Flower = require('./flower.model');

class Flowers {
    constructor({ req }) {
        Object.assign(this, req);
    }

    create() {
        let flowerObj = Object.assign({}, this.body, {
            active: true
        });
        let flower = new Flower(flowerObj);
        return Flower.create(flower).then(data => Flower.findById(data._id))
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

        return Flower.findOne(mongoQuery).then(data => data);
    }

    getAll() {
        return Flower.find().then(data => data);
    }

    deleteFlower() {
        let { params } = this;
        let { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Promise.reject(
                new Error('Bad Request', -14, 'GetByIdException', `<${id}> isn't a valid ObjectId`)
            )
        }
        const objId = new mongoose.Types.ObjectId(id);
        return Flower.findByIdAndRemove(objId).then(data => data);
    }

    update() {
        let { params, body } = this;
        let { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Promise.reject(
                new Error('Bad Request', -14, 'GetByIdException', `<${id}> isn't a valid ObjectId`)
            )
        }
        const objId = new mongoose.Types.ObjectId(id);
        return Flower.findByIdAndUpdate(objId, body).then(data => Flower.findById(data._id));
    }
}

module.exports = Flowers;
