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

    const emailMessage = el.querySelector('.emailMessage');
    const passwordMessage = el.querySelector('.passwordMessage');

    let error = false;
    if(!validator.isEmail(emailInput.value)) {
      Login.createError('Email Inválido!', emailMessage);
      error = true;
    } else {
      Login.clearError(emailMessage);
    };

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      Login.createError('Senha Inválida!', passwordMessage);
      error = true;
    } else {
      Login.clearError(passwordMessage); 
    };

    if(!error) el.submit(); 
  };

  // Static methods
  static createError(message, parent) {
    parent.classList.add('my-2');
    parent.classList.add('py-2');
    parent.classList.add('alert');
    parent.classList.add('alert-danger');
    parent.innerText = message;
  }

  static clearError(parent) {
    parent.classList.remove('my-2');
    parent.classList.remove('py-2');
    parent.classList.remove('alert');
    parent.classList.remove('alert-danger');
    parent.innerText = '';
    console.log(parent)
  }
};