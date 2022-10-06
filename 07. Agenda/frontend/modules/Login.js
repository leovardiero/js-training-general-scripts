import validator from "validator";

export default class Login {
  // Constructor method 
  constructor(formClass) {
    this.form = document.querySelector(formClass)
  };

  // Init method
  init() {
    this.events();
  };

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  }

  validate(e) {
    const el = e.target;

    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');

    let error = false;
    if(!validator.isEmail(emailInput.value)) {
      Login.createError('Email Inválido!', emailInput);
      error = true;
    } else {
      Login.clearError(emailInput);
    };

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      Login.createError('Senha Inválida!', passwordInput);
      error = true;
    } else {
      Login.clearError(passwordInput); 
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
};