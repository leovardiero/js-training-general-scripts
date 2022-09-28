import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const signinForm = new Login('.signinForm');
const loginForm = new Login('.loginForm');

signinForm.init();
loginForm.init();