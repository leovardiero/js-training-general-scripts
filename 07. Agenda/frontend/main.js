import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contact from './modules/Contact';

const signinForm = new Login('.signinForm');
const loginForm = new Login('.loginForm');

const createContactForm = new Contact('.form-create-contact')
const editContactForm = new Contact('.form-edit-contact')

signinForm.init();
loginForm.init();
createContactForm.init();
editContactForm.init();