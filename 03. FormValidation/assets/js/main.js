class ValidateForm {
  /******************************************************
   *                                          CONSTRUCTOR
   *****************************************************/
  constructor() {
    this.form = document.querySelector('.formulario');

    this.events();
  }

  /******************************************************
   *                                         EVENT METHOD
   *****************************************************/
  events() {
    // An arrow function (e => {}) is used because inside
    // arrow functions you dont lose the this concept
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  /******************************************************
   *                                      HANDLER METHODS
   *****************************************************/
  // Prevent the form to be submitted
  handleSubmit(e) {
    e.preventDefault();
    const isValidFields = this.isValidFields();
    console.log(isValidFields)
    if (isValidFields) {
      alert("Formulário Enviado com sucesso!")
     // this.form.submit()
    }
  }

  isValidFields() {
    let isValid = true;

    // Clear error fields
    for (let errors of this.form.querySelectorAll('.isError')) {
      errors.innerHTML = '';
    }

    for (let field of this.form.querySelectorAll('.toCheck')) {
      // Checa se os campos são vazios
      if (!field.value) {
        const label = field.previousElementSibling.innerHTML;
        this.createError(field, `Campo "${label}" não pode estar vazio`);
        isValid = false;
      }

      // Valida CPF
      if (field.classList.contains('cpf')) {
        if (!this.checkCPF(field)) isValid = false;
      }

      // Valida Usuário
      if (field.classList.contains('usuario')) {
        if (!this.checkUser(field)) isValid = false;
      }

      // Valida senhas
      if (field.classList.contains('senha')) {
        if (!this.checkPassword(field)) isValid = false;
      }

      // Valida senhas
      if (field.classList.contains('repetir-senha')) {
        if (!this.checkPasswordRepeat(field)) isValid = false;
      }
    }

    return isValid;
  }

  /******************************************************
   *                                   VALIDATION METHODS
   *****************************************************/

  checkCPF(field) {
    const CPFChecker = new CheckCPF(field.value);
    if (!CPFChecker.checkCpf()) {
      this.createError(field, 'CPF Inválido!')
      return false;
    }
    return true;
  }

  checkUser(user) {
    const userValue = user.value;
    let valid = true;
    if (userValue.length < 3 || userValue.length > 12) {
      this.createError(user, 'Usuário precisa ter entre 3 e 12 caracteres')
      valid = false;
    };


    if (!userValue.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(user, 'Usuário precisa conter apenas letras e/ou números')
      valid = false;
    };

    return valid;
  };

  checkPassword(password) {
    const passwordValue = password.value;
    if (passwordValue.length < 6 || passwordValue.length > 12) {
      this.createError(password, 'Senha precisa ter entre 6 e 12 caracteres')
      return false;
    };

    return true;
  };

  checkPasswordRepeat(passwordRepeat) {
    const mainPw = document.querySelector('.senha').value;
    const repeatPw = passwordRepeat.value;

    if (mainPw !== repeatPw) {
      this.createError(passwordRepeat, 'Senhas precisam ser iguais')
      return false;
    }

    return true;
  };

  /******************************************************
   *                                    FORM MANIPULATION
   *****************************************************/

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('isError');
    field.insertAdjacentElement('afterend', div);
  }





}

const validForm = new ValidateForm();