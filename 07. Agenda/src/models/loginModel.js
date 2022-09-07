const mongoose = require('mongoose')
const validator = require('validator')

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

  async register() {
    this.validate();
    
    if(this.errors.length > 0) return;

    try {
      this.user = await loginModel.create(this.body);
    }
    catch(e) {
      console.log(e)
    }
  };

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