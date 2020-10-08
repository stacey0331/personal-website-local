const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new Schema(
    {
        time: {type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true }
    },
)

module.exports = mongoose.model('responses', Form);