const TechController = require('../controllers/techs.controllers');

module.exports = app => {
    app.post('/api/techs', TechController.createTech);
    app.get('/api/techs', TechController.getTechs);
    app.delete('/api/techs/:id', TechController.deleteTech);
}