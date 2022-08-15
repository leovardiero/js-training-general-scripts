const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da main
route.get('/', homeController.homePage)
route.post('/', homeController.postForm)

// Rotas de Contato
route.get('/contato', contatoController.homePage)

module.exports = route;