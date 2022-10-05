import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contact from './modules/Contact';

const signinForm = new Login('.signinForm');
const loginForm = new Login('.loginForm');

const contactForm = new Contact('.contactForm')

signinForm.init();
loginForm.init();
contactForm.init();