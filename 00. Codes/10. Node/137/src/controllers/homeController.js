exports.homePage = (req, res, next) => {
  res.render('index.ejs')
  next();  
}

exports.postForm = (req, res) => {
  res.send(`Novo Cadastro: ${req.body.nome} ${req.body.sobrenome}`)
}