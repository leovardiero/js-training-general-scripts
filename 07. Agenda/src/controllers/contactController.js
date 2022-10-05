const Contact = require('../models/contactModel')

exports.index = (req, res) => {
  res.render('contact.ejs', {contact: {}})
  return;
}

exports.create = async function (req, res) {
  try {
    const contact = new Contact(req.body);
    await contact.create();
    
    // If there is any error
    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors);
      req.session.save(function () {
        return res.redirect('back')
      });
      return;
    };

    // Success
    req.flash('success', 'Contact created!');
    req.session.save(function() {
      return res.redirect(`/contact/${contact.contact._id}`)
    });
    
  } catch (e) {
    console.log(e);
    return res.render('err404.ejs')
  };
}

exports.showEdit = async function(req, res) {
  if(!req.params.id) return res.render('err404.ejs')
  try{
    const contact = await Contact.searchId(req.params.id)
    if (!contact) return res.render('err404.ejs');

    res.render('contact', { contact });

  } catch(e) {
    console.log(e);
    res.render('err404.ejs');
  }
}

exports.edit = async function(req, res) {
  if(!req.params.id) return res.render('err404.ejs');

  try {
    const contact = new Contact(req.body);
    await contact.edit(req.params.id);

    // If there is any error
    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors);
      req.session.save(function () {
        return res.redirect('back')
      });
      return;
    };

    // Success
    req.flash('success', 'Contact edited!');
    req.session.save(function() {
      return res.redirect(`/contact/${contact.contact._id}`)
    });
  } catch(e) {
    console.log(e);
    res.render('err404.ejs');
  }
}

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('err404.ejs')
  try{
    const contact = await Contact.delete(req.params.id)
    if (!contact) return res.render('err404.ejs');

    res.redirect('/')

  } catch(e) {
    console.log(e);
    res.render('err404.ejs');
  }
} 