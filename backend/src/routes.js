const express = require('express');

const OngsController = require('./controller/OngsController');

const IncidentController = require('./controller/IncidentController');

const ProfileController = require('./controller/ProfileController');

const SessionController = require('./controller/SessionController');



const routes = express.Router();

//acompanhar cadastros, consultar 
routes.get('/ongs', OngsController.index);
//Cadastro de ong no backend
routes.post('/ongs', OngsController.create);
//verificar casos no backend
routes.get('/incidents', IncidentController.index);
//criar casos no backend
routes.post('/incidents', IncidentController.create);
//para deletar casos do backend
routes.delete('/incidents/:id', IncidentController.delete);
//verificar perfil no backend
routes.get('/profile', ProfileController.index);
//verificar sessão no backend
routes.post('/session', SessionController.create);


module.exports = routes;

