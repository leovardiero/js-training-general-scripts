const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const loginSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const loginModel = mongoose.model('Login', loginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  };

  async login() {
    this.validate();    
    if(this.errors.length > 0) return;

    // Find user exists
    this.user = await loginModel.findOne({email: this.body.email});
    
    // Check if user not exists
    if(!this.user) { 
      this.errors.push('Usuário não encontrado')
      return;
    };

    // Check password
    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida');
      this.user = null;
      return;
    };
  };

  async register() {
    this.validate();    
    if(this.errors.length > 0) return;
    
    await this.userExists();

    if(this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    this.user = await loginModel.create(this.body);
  };

  async userExists() {
    const user = await loginModel.findOne({email: this.body.email});
    if(user) this.errors.push('This user already exists')
  }
  
  validate() {
    // Clean unnecessary fields and not-string fields
    this.cleanUp();

    // Validate email
    if(!validator.isEmail(this.body.email)) {
      this.errors.push('Invalid Email');
    };

    // Validate password lenght
    if(this.body.password.length < 3 || this.body.password.length > 50) {
       this.errors.push('Invalid Password Size');
    };
  };
  
  cleanUp() {
    // All fields on req.body is string
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    };

    // Remove unnecessary fields from 
    this.body = {
      email: this.body.email,
      password: this.body.password
    };    
  };
}

module.exports = Login;