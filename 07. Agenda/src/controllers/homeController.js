const Contact = require('../models/contactModel')

exports.index = async(req, res) => {  
  if (req.session.user) {
    try {
      const contacts = await Contact.searchContacts();
      res.render('index', {contacts})
    } catch(e) {
      console.log(e);
      res.render('err404.ejs')
    }
  }
  else {
    res.render('index', {contacts: -1})
  }
}