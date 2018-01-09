var mongoose = require('mongoose');
var Grow = require('./grow.model');

class Grows {
    constructor({ req }) {
        Object.assign(this, req);
    }

    create() {
        let grow = new Grow(this.body);
        return Grow.create(grow).then(data => Grow.findById(data._id));
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

        return Grow.findOne(mongoQuery).then(data => data);
    }

    getAll() {
        return Grow.find().then(data => data);
    }

}

module.exports = Grows;