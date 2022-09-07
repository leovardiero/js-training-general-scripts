/*********************************************************************************
 *                                                                        REQUIRES
 ********************************************************************************/

// Base
const express = require('express')
const route = express.Router();

// Controlers
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')


/*********************************************************************************
 *                                                                          ROUTES
 ********************************************************************************/

// Main routes
route.get('/', homeController.index);

// Login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route; 