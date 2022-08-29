require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('DB Connected')
    app.emit('ready')
  })
  .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
// const helmet = require('helmet');
const csrf = require('csurf');

const { checkCsfrError, csrfMiddleware } = require('./src/middleware/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
//app.use(helmet())

const sessionOptions = session({
  secret: 'abcde',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(csrf());

// Our middleware
app.use(checkCsfrError);
app.use(csrfMiddleware);

// Routes
app.use(routes)

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Access on: http://localhost:3000');
  });
})
