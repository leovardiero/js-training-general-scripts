const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController')

// Rotas da main
route.get('/', homeController.homePage, function(req, res) {
  return
})

module.exports = route; 