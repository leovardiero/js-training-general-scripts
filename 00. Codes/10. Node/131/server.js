const express = require('express');
const app = express();

// CRUD: Create Read Update Delete
//       POST   GET  PUT    DELETE
// http://meusite.com/ <- GET -> entregar a página "/"

app.get('/', (req, resp) => {
  resp.send(
  `
  <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"></input>
    <button>Enviar </button>
  </form>`
    )
});

app.post('/', (req, resp) => {
  resp.send('form')
});

app.get('/contato', (req, resp) => {
  resp.send('Thanks!!!')
})

app.listen(3000);