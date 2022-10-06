import validator from "validator";

export default class Contact {
  // Constructor method 
  constructor(formClass) {
    this.form = document.querySelector(formClass)
  };

  init() {
    this.events();
  };

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  };

  validate(e) {
    const el = e.target;

    const nameInput = el.querySelector('input[name="name"]');
    const lastnameInput = el.querySelector('input[name="lastname"]');
    const phoneInput = el.querySelector('input[name="phone"]');
    const emailInput = el.querySelector('input[name="email"]');
    let error = false;

    // Name Validation
    if (nameInput.value === '') {
      error = true;
      Contact.createError('É necessário inserir um nome!', nameInput)
    } else {
      Contact.clearError(nameInput)
    };

    // Email Validation
    if(emailInput.value !== '' && !validator.isEmail(emailInput.value)) {
      Contact.createError('Email Inválido!', emailInput);
      error = true;
    } else {
      Contact.clearError(emailInput);
    };

    // Phone-Email dependency
    if (emailInput.value === '' && phoneInput.value === '') {
      Contact.createError('É necessário inserir um email ou um telefone válido!', phoneInput);
      error = true;
    } else {
      Contact.clearError(phoneInput)
    };

    if(!error) el.submit();
  };

  // Static methods
  static createError(message, parent) {
    if (parent.nextSibling.nodeName !== 'DIV') {
      const div = document.createElement('div');

      div.classList.add('my-2');
      div.classList.add('py-2');
      div.classList.add('alert');
      div.classList.add('alert-danger');
      div.innerText = message;

      parent.parentNode.insertBefore(div, parent.nextSibling);
    }
  }

  static clearError(parent) {
    if (parent.nextSibling.nodeName === 'DIV') {
      parent.nextSibling.remove()
    }
  }
}