var mongoose = require('mongoose');
var Nute = require('./nute.model');

class Nutes {
    constructor({ req }) {
        Object.assign(this, req);
    }

    create() {
        let nute = new Nute(this.body);
        return Nute.create(nute).then(data => Nute.findById(data._id));
    }

    getById() {
        let { params } = this;
        let { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return Promise.reject(
                new Error(
                    'Bad Request',
                    -14,
                    'GetByidException',
                    `Parameter id <${id}> isn't an ObjectId`
                )
            )
        }
        const objId = new mongoose.Types.ObjectId(id);
        const mongoQuery = { _id: objId };

        return Nute.findOne(mongoQuery).then(data => data);
    }
}

module.exports = Nutes;
