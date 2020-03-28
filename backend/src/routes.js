const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//INCIDENT
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);
//PROFILE
routes.get('/profile', ProfileController.index);

//SESSION
routes.post('/sessions', SessionController.create);

module.exports = routes; 