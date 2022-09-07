/*********************************************************************************
 *                                                                        REQUIRES
 ********************************************************************************/

// Environment Variables
require('dotenv').config()

// Base requires
const express    = require('express');
const mongoose   = require('mongoose');
const session    = require('express-session');
const MongoStore = require('connect-mongo');
const flash      = require('connect-flash');
const routes     = require('./routes');
const path       = require('path');
// const helmet = require('helmet'); <- COMMENT TO USE ON LOCALHOST
const csrf = require('csurf');

// Middleware Requiriment
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middleware/middleware')

/*********************************************************************************
 *                                                                   INITIAL SETUP
 ********************************************************************************/
// App instance
const app = express();

// Mongo Connect
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('DB Connected')
    app.emit('ready')
  })
  .catch(e => console.log(e));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

// Session configuration
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

// Views configuration
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

// Other Uses
app.use(flash());
app.use(csrf());
// app.use(helmet); <- COMMENT TO USE ON LOCALHOST

// Middleware uses
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Route configuration
app.use(routes)

/*********************************************************************************
 *                                                                              ON
 ********************************************************************************/

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Access on: http://localhost:3000');
  });
});
