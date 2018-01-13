var mongoose = require('mongoose');
var Cycle = require('./cycle.model');

class Cycles {
    constructor({ req }) {
        Object.assign(this, req);
    }

    create() {
        let cycle = new Cycle(this.body);
        return Cycle.create(cycle).then(data => Cycle.findById(data._id));
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

        return Cycle.findOne(mongoQuery).then(data => data);
    }

    getAll() {
        return Cycle.find().then(data => data);
    }

    deleteCycle() {
        let { parmas } = this;
        let { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Promise.reject(
                new Error('Bad Request', -14, 'GetByIdException', `<${id}> isn't a valid ObjectId`)
            )
        }
        const objId = new mongoose.Types.ObjectId(id);
        return Cycle.findByIdAndRemove(objId).then(data => data);
    }
}

module.exports = Cycles;