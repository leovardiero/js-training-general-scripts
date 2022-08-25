const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function myMiddleware(req, res, next) {
  console.log()
  console.log('testeee')
  console.log()
  next()
}

// Rotas da main
route.get('/', myMiddleware, homeController.homePage, function(req, res) {
  console.log('Ainda estou aqui!')
})
route.post('/', homeController.postForm)

// Rotas de Contato
route.get('/contato', contatoController.homePage)

module.exports = route; 