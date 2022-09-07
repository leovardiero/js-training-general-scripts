exports.checkCsrfError = (err, req, res, next) => {
  console.log(err)
  if(err) {
    return res.render('err404')
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors  = req.flash('errors');
  res.locals.success = req.flash('success');
  next();
}