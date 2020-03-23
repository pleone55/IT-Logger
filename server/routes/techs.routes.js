const TechController = require('../controllers/techs.controllers');

module.exports = app => {
    app.post('/api/techs', TechController.createTech);
    app.get('/api/techs', TechController.getTechs);
    app.put('/api/techs/:id', TechController.updateTech);
    app.delete('/api/techs/:id', TechController.deleteTech);
}