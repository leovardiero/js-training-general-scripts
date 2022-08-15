exports.homePage = (req, res) => {
  res.render('index.ejs')
}

exports.postForm = (req, res) => {
  res.send(`Novo Cadastro: ${req.body.nome} ${req.body.sobrenome}`)
}