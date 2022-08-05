exports.homePage = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      Sobrenome: <input type="text" name="sobrenome">
      <button>Enviar</button>
    </form>`
  )
}

exports.postForm = (req, res) => {
  res.send(`Novo Cadastro: ${req.body.nome} ${req.body.sobrenome}`)
}