const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true,
            "Tech's first name is required"
        ]
    },
    lastName: {
        type: String,
        required: [
            true,
            "Tech's last name is required"
        ]
    }
}, {timestamps: true});

module.exports.Tech = mongoose.model('tech', TechSchema);