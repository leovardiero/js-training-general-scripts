require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('DB Connected')
    app.emit('ready')
  })
  .catch(e => console.log(e));

const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(routes)

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Access on: http://localhost:3000');
  });
})
