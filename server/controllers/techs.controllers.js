const { Tech } = require('../models/techs.models');

module.exports.createTech = (req, res) => {
    const { firstName, lastName } = req.body;
    Tech.create({ firstName, lastName })
        .then(tech => res.json(tech))
        .catch(err => res.status(400).json(err));
}

module.exports.getTechs = (req, res) => {
    Tech.find({})
        .then(tech => res.json(tech))
        .catch(err => res.json(err));
}

module.exports.updateTech = (req, res) => {
    Tech.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true})
        .then(tech => res.json(tech))
        .catch(err => res.json(err));
}

module.exports.deleteTech = (req, res) => {
    Tech.deleteOne({ _id: req.params.id})
        .then(deleteTech => res.json(deleteTech))
        .catch(err => res.json(err));
}