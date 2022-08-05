const express = require('express');
const app = express();

app.use(
  express.urlencoded({extended: true})
)

app.get('/', (req, res) => {
  res.send(
  `
  <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
  </form>`
  )
});

app.get('/testes/:id?/:opt?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(req.params)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`Nome enviado: ${req.body.nome}`)
});

app.listen(3000);