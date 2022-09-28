const Contact = require('../models/contactModel')

exports.index = async(req, res) => {
  try {
    const contacts = await Contact.searchContacts();
    res.render('index', {contacts})
  } catch(e) {
    console.log(e);
    res.render('err404.ejs')
  }
}