const { Log } = require('../models/logs.models');

module.exports.createLog = (req, res) => {
    const { description, attention } = req.body;
    Log.create({ tech: req.tech.id, description, attention})
        .then(log => res.json(log))
        .catch(err => res.status(400).json(err));
}

module.exports.getLogs = (req, res) => {
    Log.find({})
        .then(log => res.json(log))
        .catch(err => res.status(500).json(err));
}

module.exports.updateLog = (req, res) => {
    Log.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(log => res.json(log))
        .catch(err => res.json(err));
}

module.exports.deleteLog = (req, res) => {
    Log.deleteOne({ _id: req.params.id })
        .then(deleteLog => res.json(deleteLog))
        .catch(err => res.json(err));
}