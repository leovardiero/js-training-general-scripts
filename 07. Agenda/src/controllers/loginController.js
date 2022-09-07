const Login = require('../models/loginModel');

exports.index = (req, res) => {
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