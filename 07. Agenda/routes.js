/*********************************************************************************
 *                                                                        REQUIRES
 ********************************************************************************/

// Base
const express = require('express')
const route = express.Router();

// Controlers
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contactController = require('./src/controllers/contactController');
const { loginRequired } = require('./src/middleware/middleware');

/*********************************************************************************
 *                                                                          ROUTES
 ********************************************************************************/

// Main routes
route.get('/', homeController.index);

// Login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Contact
route.get('/contact', loginRequired, contactController.index);
route.post('/contact/create', loginRequired, contactController.create);
route.get('/contact/:id', loginRequired, contactController.showEdit);
route.post('/contact/edit/:id', loginRequired, contactController.edit);
route.get('/contact/delete/:id', loginRequired, contactController.delete);

module.exports = route; 