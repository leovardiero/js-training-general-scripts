exports.homePage = (req, res) => {
  res.render('index.ejs');
  return;  
}

exports.postHomePage = (req, res) => {
  res.send(req.body)
};
