const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema({
    farmerId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})

const sampleModel = mongoose.model('sampleModel', sampleSchema);

module.exports = sampleModel;