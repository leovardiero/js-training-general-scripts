const express = require('express')
const route = express.Router();

const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

// Rotas da main
route.get('/', homeController.homePage)
route.post('/', homeController.postForm)

// Rotas de Contato
route.get('/contato', contatoController.homePage)

module.exports = route;