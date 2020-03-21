const LogController = require('../controllers/logs.controllers');

module.exports = app => {
    app.post('/api/logs', LogController.createLog);
    app.get('/api/logs', LogController.getLogs);
    app.put('/api/logs/:id', LogController.updateLog);
    app.delete('/api/logs/:id', LogController.deleteLog);
}