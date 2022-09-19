const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  phone: { type: String, default: '' },

  createdAt: { type: Date, required: true, default: Date.now() }
})

const contactModel = mongoose.model('Contact', contactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
};

Contact.prototype.cleanUp = function () {
  
  // All fields on req.body is string
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  };

  // Remove unnecessary fields from 
  this.body = {
    name: this.body.name,
    lastname: this.body.lastname,
    email: this.body.email,
    phone: this.body.phone
  };
};

Contact.prototype.validate = function () {
  // Clean unnecessary fields and not-string fields
  this.cleanUp();

  // Name validations
  if (!this.body.name) this.errors.push('Name is required!');

  // Validate email
  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid Email');

  // Phone and Email dependency
  if (!this.body.email && !this.body.phone) this.errors.push('You need to enter an email or a phone');

};

Contact.prototype.create = async function () {
  this.validate();
  if (this.errors.length > 0) return;
  this.contact = await contactModel.create(this.body)
}

Contact.searchId = async function(id) {
  if (typeof id !== 'string') return;
  const contact = await contactModel.findById(id)
  return contact;
}

module.exports = Contact;