const HomeModel = require('../models/HomeModel')

HomeModel.create({
  title: 'Meu Primeiro Mongo',
  description: 'Alguma Descrição!!'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));

exports.homePage = (req, res, next) => {
  res.render('index.ejs')
  next();  
}
