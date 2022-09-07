const Login = require('../models/loginModel');

exports.index = (req, res) => {
  if(req.session.user) return res.render('login-logado');
  res.render('login');  
};

exports.register = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();
  
    // If there is any error
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back')
      });
      return;
    };
  
    // Success
    req.flash('success', 'User created!');
    req.session.save(function() {
      return res.redirect('back')
    });
  } catch(e) {
    console.log(e);
    return res.render('err404.ejs')
  }
};

exports.login = async function(req, res) {
  try {
    // Try to login
    const login = new Login(req.body);
    await login.login();

    // If there's any error, show on screen
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back')
      });
      return;
    };

    // Success
    req.flash('success', 'Welcome! You are logged');
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('back')
    });

  } catch(e) {
    console.log(e);
    return res.render('err404.ejs')
  }
};

exports.logout = function(req, res) {
  req.session.destroy();
  res.redirect('/');
};