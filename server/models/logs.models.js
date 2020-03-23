const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    tech: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [
            true,
            "A description of the log is required"
        ]
    },
    attention: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports.Log = mongoose.model('log', LogSchema);